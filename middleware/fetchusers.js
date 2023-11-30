require("dotenv").config();
const jwt = require("jsonwebtoken");
let success = false;
const fetchusers = async (req, res, next) => {
  const AuthToken = req.header("authtoken");
  if (!AuthToken) {
    success = false;
    return res
      .status(400)
      .json({ success, message: "Invalide Autentication Token" });
  }
  try {
    const data = jwt.verify(AuthToken, process.env.JWT_SECRETE);
    req.user = data.foo;
   
    next();
  } catch (error) {
    success = false;
    res
      .status(500)
      .json({ success, message: "enternal server error at fetchuser" });
  }
};

module.exports = fetchusers;
