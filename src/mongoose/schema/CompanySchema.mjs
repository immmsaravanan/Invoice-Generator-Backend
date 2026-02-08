import mongoose from "mongoose";

const Comapny = new mongoose.Schema([
  {
    username: {
      type: mongoose.Schema.Types.String,
      unique: true,
      required: true,
    },
    company_name: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    company_email: {
      type: mongoose.Schema.Types.String,
      unique: true,
      required: true,
    },
    gstin: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    address_line1: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    address_line2: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    address_line3: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
      contact_number: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    country:{
      type: mongoose.Schema.Types.String,
      required: true,
    },
    state:{
      type: mongoose.Schema.Types.String,
      required: true,
    },  
    session: {
        type:mongoose.Schema.Types.String,
    },
  },
]);



export const CompanySchema = mongoose.model("company", Comapny);

