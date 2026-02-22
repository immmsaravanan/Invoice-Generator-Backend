import mongoose from "mongoose";

const Format = new mongoose.Schema([
    {
        company_gstin:{
              type: mongoose.Schema.Types.String,
              unique: true,
              required: true,
            },

        formats:{
              type: [mongoose.Schema.Types.Mixed],
              required: true,
            },
    }
])