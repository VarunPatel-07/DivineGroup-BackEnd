const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const ForgotPass = require("../models/ForgotPassword");

const TokenDecoder = async (req, res, next) => {
  const { forgotPassToken, id } = req.query;
  try {
    if (!forgotPassToken) {
      res.status(400).send("the token is invalid");
    }
    if (!id) {
      res.status(400).send("the user id is invalid");
    }
    const user = await Users.findById(id);
    if (!user) {
      res.status(400).send("can not get the user");
    }
    const ComperToken = await ForgotPass.findOne({
        owner : user._id
    })
    const CheckResetToken = bcrypt.compareSync(forgotPassToken , ComperToken.ForgotPassToken)
    if(!CheckResetToken){
     res.status(400).send("some error ocured while compering the token");
    }
    req.user = user._id
    next();
  } catch (error) {
    success = false;
    res
      .status(500)
      .json({ success, message: "enternal server error at fetchuser" });
  }
  
};
module.exports = TokenDecoder;
