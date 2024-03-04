require("dotenv").config();
const express = require("express");
const routes = express.Router();
const { body, validationResult } = require("express-validator");
const fetchusers = require("../middleware/fetchusers");
const MailTransport = require("../helper/SendMails");
const ClientsMails = require("../models/ClientSMail");
const multer = require("multer");
const {
  EmailImgAndFilesUploader,
  handleCloudUpload,
} = require("../middleware/Multer");
const upload = multer({ dest: "uploads/" });
let success = false;
routes.post(
  "/sendMailToClient",
  EmailImgAndFilesUploader,
  [
    body("receiverEmail", "receivers array is required").exists(),
    body("subject", "the subject of the chat is required").exists(),
    body("body", "the body of the mail is required").exists(),
  ],
  fetchusers,
  async (req, res) => {
    try {
      const {
        receiverId,
        receiverEmail,
        senderEmail,
        senderId,
        subject,
        body,
      } = req.body;
      const imageArr = req.files;
      let EmailImages = imageArr.EmailImg?.map((image) => image);
      let EmailFiles = imageArr.EmailFiles?.map((image) => image);
      const CloudEmailImage = [];
      const CloudEmailFilesArray = [];
      const result = validationResult(req);
      if (!result) {
        return res.json({ result });
      }
      if (EmailImages) {
        for (const SingleImage of EmailImages) {
          const EmailImgBase64 = Buffer.from(SingleImage.buffer).toString(
            "base64"
          );
          let EmailImgDataURI =
            "data:" + SingleImage.mimetype + ";base64," + EmailImgBase64;
          const CloudEmailImg = await handleCloudUpload(EmailImgDataURI);

          CloudEmailImage.push(CloudEmailImg.secure_url);
        }
      }
      if (EmailFiles) {
        for (const SingleFile of EmailFiles) {
          const EmailFilesBase64 = Buffer.from(SingleFile.buffer).toString(
            "base64"
          );
          let EmailFilesDataURI =
            "data:" + SingleFile.mimetype + ";base64," + EmailFilesBase64;
          console.log(EmailFilesDataURI);
          const CloudEmailFiles = await handleCloudUpload(EmailFilesDataURI);

          CloudEmailFilesArray.push(CloudEmailFiles.secure_url);
        }
      }
      console.log(CloudEmailFilesArray, CloudEmailImage);
      const receiverArray = receiverEmail;
      try {
        MailTransport.sendMail({
          from: process.env.EMAIL_ADDRESS_OF_AUTHER,
          to: receiverArray,
          subject: subject,
          html: body,
        });
      } catch (error) {
        res.json({
          message: "there is an error sending an email",
          error: error,
        });
      }
      await ClientsMails.create({
        receiverId: receiverId,
        receiverEmail: receiverEmail,
        subject: subject,
        senderId: senderId,
        senderEmail: senderEmail,
        body: body,
        files: CloudEmailFilesArray,
        images: CloudEmailImage,
      });
      success = true;
      res.json({ success, massage: "the mail send successfully" });
    } catch (error) {
      console.log(error);
      success = false;
      res.json({
        success,
        massage: "the error occurred in the send mail route",
      });
    }
  }
);

module.exports = routes;
