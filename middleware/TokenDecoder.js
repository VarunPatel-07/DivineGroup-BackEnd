const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const ForgotPass = require("../models/ForgotPassword");

const TokenDecoder = async (req, res, next) => {
  const { forgotPassToken, id } = req.query;
  console.log(req.query);
  try {
    if (!forgotPassToken) {
      return res.status(400).send("the token is invalid");
    }
    if (!id) {
      return res.status(400).send("the user id is invalid");
    }
    const user = await Users.findById(id);
    if (!user) {
      return res.status(400).send("can not get the user");
    }
    const ComperToken = await ForgotPass.find({
      owner: user._id,
    });
    console.log(ComperToken[0].ForgotPassToken)
    const CheckResetToken = bcrypt.compareSync(
      forgotPassToken,
      ComperToken[0].ForgotPassToken
    );
    console.log(CheckResetToken)
    if (!CheckResetToken) {
      console.log(CheckResetToken)
      return res
        .status(400)
        .send("some error ocured while compering the token");
    }
    req.user = user._id;
    console.log(user._id);
    next();
  } catch (error) {
    console.log(error);
    success = false;
    res
      .status(500)
      .json({ success, message: "enternal server error at fetchuser" });
  }
};
module.exports = TokenDecoder;
