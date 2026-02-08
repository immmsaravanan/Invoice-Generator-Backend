import mongoose from "mongoose";

const SubUsers = new mongoose.Schema(
    [
        {
            first_name:{
                    type: mongoose.Schema.Types.String,
                    required: true
            },
            last_name:{
                    type: mongoose.Schema.Types.String,
                    required: true
            },
            company_name:{
                    type: mongoose.Schema.Types.String,
                    required: true
            },
            company_gstin:{
                    type: mongoose.Schema.Types.String,
                    required: true
            },
            role:{
                    type: mongoose.Schema.Types.String,
                    required: true
            },
            permissions:{
                    type: [mongoose.Schema.Types.String],
                    required: true
            },
            username:{
                type: mongoose.Schema.Types.String,
                required: true
            },
            password:{
                type: mongoose.Schema.Types.String,
                required: true
            },
            session_id:{
                type: mongoose.Schema.Types.String,
                required: true
            }

        }
    ]
)

export const SubUsersSchema = mongoose.modelNames("sub_users",SubUsers);