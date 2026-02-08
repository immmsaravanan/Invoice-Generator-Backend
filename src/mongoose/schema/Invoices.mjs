import mongoose from "mongoose";

const Invoices = new mongoose.Schema([
    {
    gstin:{

             type: mongoose.Schema.Types.String,
             required: true
    },
    client_data:{
        type:[mongoose.Schema.Types.Mixed],
        required:true
    },

    }
])
export  const InvoiceSchema =mongoose.build('invoices',Invoices)