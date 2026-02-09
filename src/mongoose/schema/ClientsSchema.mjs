import mongoose from "mongoose"
const Client = new mongoose.Schema([
  {
  client_name: {
    type: mongoose.Schema.Types.String,
    required: true
  },
 client_addresses:
 {
    type: [mongoose.Schema.Types.Mixed],
 },
    client_gstin: {
    type: mongoose.Schema.Types.String,
    required: true
  },
    company_name: {
    type: mongoose.Schema.Types.String,
    required: true
  },
    company_gstin: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  },

])

export const ClientSchema = mongoose.model("clients",Client)