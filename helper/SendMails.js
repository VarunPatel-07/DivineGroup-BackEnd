const nodemailer = require("nodemailer");
require("dotenv").config();


const MailTransport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SEND_MAIL_USER_NAME,
    pass: process.env.SEND_MAIL_PASSWORD,
  },
});

module.exports = MailTransport;
