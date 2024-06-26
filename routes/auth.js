require("dotenv").config();
const express = require("express");
const routes = express.Router();
const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//  this is a component from express validater which is used to perform some backend vadiation so that we can perform some validation task on the backend
const { body, validationResult } = require("express-validator");
const OneTimePassword = require("../models/OneTimePass");
const GenerateOTP = require("../helper/GenerateOtp");
const MailTransport = require("../helper/SendMails");
const {
  VerificationEmailBody,
  ResetPassWordMail,
} = require("../helper/MailBody");
const fetchusers = require("../middleware/fetchusers");
const ForgotPassToken = require("../helper/ForgotPassTokenGenerater");
const ForgotPass = require("../models/ForgotPassword");
const TokenDecoder = require("../middleware/TokenDecoder");
const { json } = require("express");
const TwoStepVerification = require("../models/TwoStepVerify");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const {
  ProfileImageUploader,
  handleCloudUpload,
} = require("../middleware/Multer");
const cloudinary = require("cloudinary").v2;
let success = false;
const saltRound = 10;

// ? 'CREATEUSER' // Post Request === 1 ===> this request is usefull for creating a
//?  TO TEST THE API ==> {" http://localhost:500/app/api/auth/register "}
routes.post(
  "/register",
  upload.none(),
  [
    body("name", "the length of the name is etlist 3").exists(),
    body("username", "the length of the username is etlist 3").exists(),
    body("email", "email is invalid").isEmail(),
    body(
      "password",
      "password must contain Eight character , one Uppercase letter , one Number , one Special Character"
    ).isStrongPassword({
      minUppercase: 1,
      minNumbers: 1,
    }),
  ],
  async (req, res) => {
    const { username, name, email, password, role } = req.body;
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        console.log(result);
        return res.json({ result });
      }
      //  firstly we find that the user is excisting or not
      //  we are chacking the user on the basis of the username and you can use different parameter on your requirment
      let user = await Users.findOne({ username: username });
      if (user) {
        return res
          .status(400)
          .json({ message: "Sorry a user with this email already exists" });
      }
      //  now we hasd the password which is most importent thing so we can ensaure the securiy of the users and the website also
      // for the hashing of password we use bcrypt js
      const salt = bcrypt.genSaltSync(saltRound);
      const hashedPassword = bcrypt.hashSync(password, salt);

      //    if no user exist whit the same username then we create new user
      user = await Users.create({
        name: name,
        username: username,
        email: email,
        password: hashedPassword,
        role: role,
      });

      // now we have to atonticate the email of the user that the email is authenticate
      const GeneratedOneTimePass = GenerateOTP();
      // to maintain the security of the app we are also hashing the otp
      const OneTimeSalt = bcrypt.genSaltSync(saltRound);
      const hashedOneTimePass = bcrypt.hashSync(
        GeneratedOneTimePass,
        OneTimeSalt
      );
      await OneTimePassword.create({
        owner: user._id,
        oneTimeToken: hashedOneTimePass,
      });

      // after the authentication we are giving the auth token in the exchange of the login the auth token contain the id of user which is required so that you allow the user th change

      var token = jwt.sign(
        {
          foo: user._id,
        },
        process.env.JWT_SECRETE
      );

      // now after generating the otp now we are sending the generated otp to the user

      // ? we can also use gmail now but the email are dummy .................
      try {
        MailTransport.sendMail({
          from: {
            name: "Divine Group",
            address: process.env.EMAIL_ADDRESS_OF_AUTHER,
          },
          to: user.email,
          subject: "Email Verification",
          html: VerificationEmailBody(GeneratedOneTimePass),
        });
      } catch (error) {
        res.json({
          error: error,
          message:
            "there is an error sending email please double chack your email",
        });
      }

      success = true;
      let Message =
        "An Verification Otp is Send To Your Provided Email Address";

      res.json({ success, token, message: Message });
    } catch (error) {
      // console.error(error.message);
      success = false;
      res
        .status(500)
        .json({ success, message: "internel server error", error: error });
    }
  }
);

// ? 'LOGINUSER' // Post Request === 2 ===> this request is usefull for creating a new user
//?  TO TEST THE API ==> {" http://localhost:500/app/api/auth/loginuser"}
routes.post(
  "/login",
  [
    body("username", "the length of the username is etlist 3").exists(),
    body(
      "password",
      "password must contain Eight character , one Uppercase letter , one Number , one Special Character"
    ).isStrongPassword({
      minUppercase: 1,
      minNumbers: 1,
    }),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.json({ result });
    }
    const { username, password } = req.body;

    try {
      // with the help of debuging we are gating "username" , "password" from the body of the request

      let verificationMessage = "";
      let user = await Users.findOne({ username: username });

      if (!user) {
        return res
          .status(200)
          .json({ message: "Sorry a user with this username dose not exists" });
      }

      const comperPassword = await bcrypt.compare(password, user.password);

      if (!comperPassword) {
        return res
          .status(200)
          .json({ message: "Try To Login With Correct Credentials" });
      }
      // after the authentication we are giving the auth token in the exchange of the login the auth token contain the id of user which is required so that you allow the user th change

      // now we check that the two step verification of user is true or not

      if (user.twoStepVerification) {
        // if the  two step verifivction is on the we generate the otp
        const TwoStepVerificationOTP = GenerateOTP();
        // after generating the otp to store it in the database first we hash that otp and after that we store it in the database

        const OneTimeVerificationSalt = bcrypt.genSaltSync(saltRound);
        const hashedVerificationOTP = bcrypt.hashSync(
          TwoStepVerificationOTP,
          OneTimeVerificationSalt
        );
        await OneTimePassword.create({
          owner: user._id,
          oneTimeToken: hashedVerificationOTP,
        });
        // to verify it we will send it the user in the orignal form
        try {
          // ? sending the mail
          MailTransport.sendMail({
            from: {
              name: "Divine Group",
              address: process.env.EMAIL_ADDRESS_OF_AUTHER,
            },
            to: user.email,
            subject: "Two Step Verification Email",
            html: VerificationEmailBody(TwoStepVerificationOTP),
          });
        } catch (error) {
          // * if error occured
          res.json({
            error: error,
            message:
              "there is an error sending email please double chack your email",
          });
        }

        verificationMessage =
          "a verification otp is send to your email address because you enabeld the two step verification";
      }
      const token = jwt.sign(
        {
          foo: user._id,
        },
        process.env.JWT_SECRETE
      );

      success = true;
      res.json({
        twoStepVerification: user.twoStepVerification,
        success: success,
        token: token,
        message: verificationMessage,
      });
    } catch (error) {
      console.error(error);
      success = false;
      res.status(500).json({ success, message: "internel server error" });
    }
  }
);

// ? 'EMAIL VERIFICATION' // Post Request === 3 ===> this request is for to verify the user with otp sended to your email
//?  TO TEST THE API ==> {" http://localhost:500/app/api/auth/emailverification"}
routes.post(
  "/emailvarification",
  [body("oneTimeToken", "Plese Enter The Valid Otp Token").exists()],
  fetchusers,
  async (req, res) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        console.log(result);
        return res.json({ result });
      }
      // we are gatting the otp from the body of the request
      const { oneTimeToken } = req.body;

      // coz we are gatting the token then verifying through otp so that means that we have auth tokeen and if we have auth token than we have user  id
      let Newuser = req.user;
      let user = await Users.findById(Newuser);
      if (!user) {
        return res
          .status(400)
          .json({ message: "Sorry a user with this email dose not exists" });
      }
      // while temperararyly storin the otp we are also storing the id of user in it so user id from authtoken we can also find that otp from the database
      let PreExistOtp = await OneTimePassword.findOne({
        owner: user,
      });
      if (!PreExistOtp) {
        return res.status(400).json({ message: "Cant Find The OTP" });
      }
      const CompreOtpToken = bcrypt.compareSync(
        oneTimeToken,
        PreExistOtp.oneTimeToken
      );
      if (!CompreOtpToken) {
        return res
          .status(400)
          .json({ message: "Look Like You Entered The Wrong OTP" });
      }
      user.verified = true;
      await user.save();
      await OneTimePassword.findByIdAndDelete(PreExistOtp._id);
      success = true;
      res.json({ success, message: "your email is verified successfully" });
    } catch (error) {
      success = false;
      res.status(500).json({ success, message: "internel server error" });
    }
  }
);

// ? 'RESEND OTP' // Post Request === 4 ===> this request is to resend the otp to the user
//?  TO TEST THE API ==> {" http://localhost:500/app/api/auth/resendotp"}
routes.post("/resendotp", fetchusers, async (req, res) => {
  // we are gatting the otp from the body of the request
  try {
    // coz we are gatting the token then verifying through otp so that means that we have auth tokeen and if we have auth token than we have user  id
    let Newuser = req.user;
    let user = await Users.findById(Newuser);
    if (!user) {
      return res
        .status(400)
        .json({ message: "Sorry a user with this email dose not exists" });
    }
    // while temperararyly storin the otp we are also storing the id of user in it so user id from authtoken we can also find that otp from the database
    let PreExistOtp = await OneTimePassword.findOne({
      owner: user,
    });
    if (PreExistOtp) {
      await OneTimePassword.findByIdAndDelete(PreExistOtp._id);
    }

    // now if there is a otp then firstly we delete it then resend it
    const GeneratedOneTimePass = GenerateOTP();
    // to maintain the security of the app we are also hashing the otp
    const OneTimesalt = bcrypt.genSaltSync(saltRound);
    const hashedOneTimePass = bcrypt.hashSync(
      GeneratedOneTimePass,
      OneTimesalt
    );
    const OneTimePass = new OneTimePassword({
      owner: user._id,
      oneTimeToken: hashedOneTimePass,
    });

    MailTransport.sendMail({
      from: {
        name: "Divine Group",
        address: process.env.EMAIL_ADDRESS_OF_AUTHER,
      },
      to: user.email,
      subject: "Resend OTP For Email Verification",
      html: VerificationEmailBody(GeneratedOneTimePass),
    });
    await OneTimePass.save();
    res.json({ message: "We Resend An OTP For The Email Verification" });
  } catch (error) {
    success = false;
    res.status(500).json({ success, message: "internel server error" });
  }
});

// ? 'GETING THE USER INFO' // Post Request === 5 ===> this rout is used to get the user info with the help of auth token so that we can show case that info in the name of user users profile img etc
//?  TO TEST THE API ==> {" http://localhost:500/app/api/auth/getuserinfo"}
routes.get("/getuserinfo", fetchusers, async (req, res) => {
  try {
    const FetchUser = await Users.findById(req.user).select("-password");
    if (!FetchUser) {
      res.status(404).json({
        success,
        message: "some thing wrong happing can not getting  user data",
      });
    } else {
      res.json(FetchUser);
    }
  } catch (error) {
    success = false;
    res
      .status(500)
      .json({ success, message: "internel server error from getusers" });
  }
});

// ? 'GENERATIN FORGET PASSWORD TOKEN' // Post Request === 6 ===> this route is used to create the forget password token so that we can use that token to reset password by compering the reset token
//?  TO TEST THE API ==> {" http://localhost:500/app/api/auth/forget-password-token"}
routes.post(
  "/forget-password-token",
  [
    body(
      "email",
      "a valid email is required to send resrt password link on your email"
    ).isEmail(),
  ],
  async (req, res) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.json({ result });
      }
      const { email } = req.body;
      console.log(email);
      const user = await Users.findOne({
        email: email,
      });
      if (!user) {
        res.status(404).json({
          success,
          message: "can not find the user with this email in our database",
        });
      }

      const CheckToken = await ForgotPass.findOne({
        owner: user._id,
      });
      if (CheckToken) {
        return res.json({
          success,
          Is_token: true,
          message: "the token alredy exist try agani after an hour",
        });
      }
      const ForgotPassTokenGenerater = ForgotPassToken(50);
      //  to ensaure the security of the app we also hash the newly generated token
      const PassSalt = bcrypt.genSaltSync(saltRound);
      const HashedForgotPassToken = bcrypt.hashSync(
        ForgotPassTokenGenerater,
        PassSalt
      );
      // now after all the security parameter and all the work we are going th save the token in the data base for temperary time
      const SaveForgotPassToken = new ForgotPass({
        owner: user._id,
        ForgotPassToken: HashedForgotPassToken,
      });
      await SaveForgotPassToken.save();
      // then by email we are going to send that link to user
      try {
        MailTransport.sendMail({
          from: {
            name: "Divine Group",
            address: process.env.EMAIL_ADDRESS_OF_AUTHER,
          },
          to: user.email,
          subject: "Reset Password Mail",
          html: ResetPassWordMail(
            `http://localhost:3000/pages/auth/reset-password?forgotPassToken=${ForgotPassTokenGenerater}&id=${user._id}`
          ),
        });
        success = true;
        return res.json({ success });
      } catch (error) {
        success = false;
        return res.json({
          success,
          error: error,
          message:
            "there is an error sending email please double chack your email",
        });
      }
    } catch (error) {
      success = false;
      res.status(500).json({ success, message: "internel server error" });
    }
  }
);

// ? 'UPDATING THE PASSWORD' // Post Request === 7 ===> this route is used to change the password which is allready in the database
//?  TO TEST THE API ==> {" http://localhost:500/app/api/auth/reset-password"}
routes.put(
  "/reset-password",
  TokenDecoder,
  [body("password", "password is required it can not be empty")],
  async (req, res) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.json({ result });
      }
      const { password } = req.body;
      console.log(password);
      const FindUser = await Users.findById(req.user);
      if (!FindUser) {
        return res.json({ success, message: "can not find user in database" });
      }
      // now we comper the new password with the exsting password and if the password is same then we dont save that
      const ComperNewPass = bcrypt.compareSync(password, FindUser.password);
      if (ComperNewPass) {
        return res.json({
          samePass: true,
          message: "the new password can not be same as older password",
        });
      }
      // now we also hash the new password
      const NewPassSalt = bcrypt.genSaltSync(saltRound);
      const NewHashedPassword = bcrypt.hashSync(password, NewPassSalt);
      FindUser.password = NewHashedPassword.trim();
      await FindUser.save();
      await ForgotPass.findOneAndDelete({
        owner: FindUser._id,
      });
      success = true;
      return res.json({
        success,
        message: `the orignal password:${password} ====== the hashed password ${NewHashedPassword}`,
      });
    } catch (error) {
      success = false;
      res.status(500).json({ success, message: "internel server error" });
    }
  }
);

// ? 'FETCHING ALL USERS' // Post Request === 8 ===> this is the post request which is only done by admin
//?  TO TEST THE API ==> {"http://localhost:500/app/api/auth/fetchAllUsers"}
routes.get("/fetchAllUsers", fetchusers, async (req, res) => {
  try {
    const PageNo = parseInt(req.query.PageNo) || 1;
    const PageSize = parseInt(req.query.PageSize) || 10;
    const startIndex = (PageNo - 1) * PageSize;
    const endIndex = startIndex + PageSize;

    const Check = await Users.findById(req.user).select("-password");

    if (Check.role.toLowerCase() === "admin") {
      const FetchAllUsers = await Users.find()
        .find({ _id: { $ne: req.user } })
        .select("-password");
      const Filtered_Data = FetchAllUsers.slice(startIndex, endIndex);
      res.json(Filtered_Data);
    } else {
      return res.json({ message: "only admin is allowed" });
    }
  } catch (error) {
    success = false;
    res
      .status(500)
      .json({ success, message: "internel server error from FetchAllUsers" });
  }
});

// ? 'TWO STEP VERIFICATION' // Post Request === 9 ===> this post request is used to know that  twostep verification is on or off if it is on then we send otp when we login
//?  TO TEST THE API ==> {"http://localhost:500/app/api/auth/toggletwostepverification"}

routes.put(
  "/toggletwostepverification",
  [body("accountPassword", "Plese Enter The Valid Otp Token").exists()],
  fetchusers,
  async (req, res) => {
    console.log("hello");
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.json({ result });
    }
    try {
      const { accountPassword } = req.body;
      let user = await Users.findById(req.user);
      if (!user) {
        res.json({
          message: "cannot find the users data please try again letter",
        });
      }
      const PasswordCompering = bcrypt.compareSync(
        accountPassword,
        user.password
      );
      if (!PasswordCompering) {
        success = false;
        return res.json({ success, message: "plese enter the valid password" });
      }
      let veri = "";
      console.log(user);
      if (user.twoStepVerification) {
        user.twoStepVerification = false;

        veri = "off";
      } else {
        user.twoStepVerification = true;
        veri = "on";
      }

      await user.save();
      success = true;
      console.log("hello last");
      res.json({
        success,
        veri,
        message: `the two step verification is turned  ${veri}`,
      });
    } catch (error) {
      success = false;
      console.log(error);
      res.status(500).json({
        success,
        message: "internel server error from togeltwostepverification 1",
      });
    }
  }
);

// ? 'UPDATING THE USER INFO' // Post Request === 10 ===> this post request is used to update the user info but we dont give autharity to chane password to chane password we use the forget password methode
//?  TO TEST THE API ==> {"http://localhost:500/app/api/auth/updateuserinfo"}

routes.put(
  "/updateUserinfo",
  ProfileImageUploader,
  fetchusers,
  async (req, res) => {
    const imagearr = req.files;

    try {
      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
      });
      const CloudProfileImag = [];
      if (imagearr.ProfileImage) {
        const ProfileImageB64 = Buffer.from(
          imagearr.ProfileImage[0].buffer
        ).toString("base64");
        let ProfileImageURI =
          "data:" +
          imagearr.ProfileImage[0].mimetype +
          ";base64," +
          ProfileImageB64;
        const imageURL = await handleCloudUpload(ProfileImageURI);
        CloudProfileImag.push(imageURL.secure_url);
      }

      const { name, username, email } = req.body;
      console.log(CloudProfileImag);
      const updatedUserInfo = {};
      if (name != "undefined") {
        updatedUserInfo.name = name;
      }
      if (username != "undefined") {
        updatedUserInfo.username = username;
      }
      if (email != "undefined") {
        updatedUserInfo.email = email;
      }
      updatedUserInfo.ProfileImage = CloudProfileImag[0];
      const userInfo = await Users.findByIdAndUpdate(
        req.user,
        { $set: updatedUserInfo },
        { new: true }
      );

      res.json({ message: "the user information is changed" });
    } catch (error) {
      console.log(error);
      success = false;
      res
        .status(500)
        .json({ success, message: "internel server error at updateuserinfo" });
    }
  }
);
routes.post("/comparePassword", fetchusers, async (req, res) => {
  try {
    const { password } = req.body;
    console.log(password);
    const user = await Users.findById(req.user);

    const comperPassword = await bcrypt.compare(password, user.password);
    console.log(comperPassword);
    if (comperPassword) {
      success = true;

      res.json({ success });
    } else {
      success = false;

      res.json({ success });
    }
  } catch (error) {
    console.log(error);
  }
});
routes.put("/changePassword", fetchusers, async (req, res) => {
  try {
    const { newPassword } = req.body;
    console.log(newPassword);
    const user = await Users.findById(req.user);
    const ComperNewPass = bcrypt.compareSync(newPassword, user.password);
    if (ComperNewPass) {
      success = true;
      return res.json({
        success,
        message: "the new password can not be same as older password",
      });
    }
    // now we also hash the new password
    const NewPassSalt = bcrypt.genSaltSync(saltRound);
    const NewHashedPassword = bcrypt.hashSync(newPassword, NewPassSalt);
    console.log(NewHashedPassword);
    user.password = NewHashedPassword.trim();
    await user.save();
    success = true;
    return res.json({ success, message: "the password changed successfully" });
  } catch (error) {
    console.log(error);
  }
});
module.exports = routes;
