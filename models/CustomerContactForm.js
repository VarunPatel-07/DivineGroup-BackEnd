const mongoose = require("mongoose");
const { Schema } = mongoose;

const CustomerContactFormSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  interestedin: {
    type: Array,
  },
  number: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const CustomerContactForm = mongoose.model(
  "customerContactForm",
  CustomerContactFormSchema
);
module.exports = CustomerContactForm;
