require("dotenv").config();
const express = require("express");
const routes = express.Router();
const { body, validationResult } = require("express-validator");
const CustomerContactForm = require("../models/CustomerContactForm");
const MailTransport = require("../helper/SendMails");
const { VerificationEmailBody } = require("../helper/VerificationMailBody");
const fetchusers = require("../middleware/fetchusers");
let success = false;
// ? THIS ROUTES IS USED TO GET THE INFO OF THE CUSTOMER WHO WANTED TO CONTACT US  FROM LANDING PAGE AND STORE IT TO OUR DATABASE AND ALSO  SEND THE EMAIL TO THE CONSUMER THAT THEIR INFO IS SUMBITED AND WE WILL MAKE A CONTACT TO YOU

//? TO TEST THE API ====>{"http://localhost:500/app/api/customerContactInfo/registercustomer"}

routes.post(
  "/registercustomer",
  [
    body("firstname", "the length of the firstname is etlist 3").exists(),
    body("lastname", "the length of the lastname is etlist 3").exists(),
    body("email", "email is invalid").isEmail(),
    body("number", "number is invalid").exists(),
    body("message", "the length of the message is etlist 3 ").exists(),
  ],
  async (req, res) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.json({ result });
      }
      const { firstname, lastname, email, interestedin, number, message } =
        req.body;
      // now we will take the information from the user and save it in the database and then send the email to the users
      let customerInfo = new CustomerContactForm({
        firstname: firstname,
        lastname: lastname,
        email: email,
        interestedin: interestedin,
        number: number,
        message: message,
      });
      const FullName = firstname + " " + lastname;
      console.log(FullName);
      try {
        MailTransport.sendMail({
          from: process.env.EMAIL_ADDRESS_OF_AUTHER,
          to: email,
          subject: "welcom mail",
          html: VerificationEmailBody(4545),
        });
      } catch (error) {
        res.json({
          message: "there is an error sending an email",
          error: error,
        });
      }
      await customerInfo.save();
      res.json({ customerInfo });
    } catch (error) {
      res.json({
        message: "there is an error to get your data plese try again letter",
      });
    }
  }
);
routes.get("/GetAllCustomer", fetchusers, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
    const pageSize = parseInt(req.query.pageSize) || 10; // Default page size to 10 if not provided
    const All_Customer = await CustomerContactForm.find().sort({
      updatedAt: -1,
    });
  
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const Filtered_Data = All_Customer.slice(startIndex, endIndex);
    success = true;
    res.json({ success, Filtered_Data });
  } catch (error) {
    res.json({
      success,
      message: "the error accrued in the get all customer function",
    });
  }
});

module.exports = routes;
