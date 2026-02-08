import mongoose from "mongoose";

const Reports = new mongoose.Schema([
    {
        company_name:{
                type: mongoose.Schema.Types.String,
                required: true
        },
        gstin:{
                type: mongoose.Schema.Types.String,
                required: true
        },
        invoices:{
                type: [mongoose.Schema.Types.Mixed],
                required: true
        },
        Accounting_year:{
                type: mongoose.Schema.Types.String,
                required: true
        }
    }
])
export const ReportSchema = mongoose.model('reports',Reports)