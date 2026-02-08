export const LoginSchema = {
    username:{
        notEmpty:{errorMessage:"username cannot be empty"},
        isString:{errorMessage:"username must be a combination of letters and characters"},
        isLength:{
            options:{min:3 ,max:256},
            errorMessage: 'the username is too short'
        }
    },
    password:
    {
        notEmpty:{errorMessage:"Password cannot be empty"},
        errorMessage:"Enter a valid password"
    }
}

export const SignupSchema = {
        company_name:{
        notEmpty:{errorMessage:"company name cannot be empty"},
        isString:{errorMessage:"company name must be - of letters"},
        isLength:{
            options:{min:3 ,max:256},
            errorMessage: 'the company name is too short'
        }
    },
    company_email:
    {
        notEmpty:{ errorMessage:"The Company Email Cannot Be Empty"},
        isString:{errorMessage:"Enter A Valid Email"},
        isLength:{
            options:{min:3 ,max:256},
            errorMessage:"Enter And Valid Email"
    }
    },
    gstin:
    {
        notEmpty:{errorMessage:"GSTIN cannot be empty"},
        isString:{errorMessage:"Enter A Valid GSTIN"},
        isLength:{
            options:{min:15 , max:15},
            errorMessage:"Enter A Valid GSTIN"
        }
    },
    username:{
        notEmpty:{errorMessage:"username cannot be empty"},
        isString:{errorMessage:"username must be a String"},
        isLength:{
            options:{min:3 ,max:256},
            errorMessage: 'the username is too short'
        }
    },
    password:
    {
        notEmpty:{errorMessage:"Password cannot be empty"},
        errorMessage:"Enter a valid password"
    },
        confirm_password:
    {
        notEmpty:{errorMessage:"Password cannot be empty"},
        errorMessage:"Enter a valid password"
    },
    address_line1:
    {
        notEmpty:{errorMessage:"address line1 cannot be empty"},
        isString:{errorMessage:"address line1 must be a combination of letters and characters"},
        isLength:{
            options:{min:3 ,max:256},
            errorMessage: 'the address line1 is too short'
    }
},
    address_line2:
    {
        notEmpty:{errorMessage:"address line2 cannot be empty"},
        isString:{errorMessage:"address line2 must be a combination of letters and characters"},
        isLength:{
            options:{min:3 ,max:256},
            errorMessage: 'the address line2 is too short'
    }
},
    address_line3:
    {
        notEmpty:{errorMessage:"address line3 cannot be empty"},
        isString:{errorMessage:"address line3 must be a combination of letters and characters"},
        isLength:{
            options:{min:3 ,max:256},
            errorMessage: 'the address line3 is too short'
    }
},
state:
    {
        notEmpty:{errorMessage:"state cannot be empty"},
        isString:{errorMessage:"state  must be a  characters"},
        isLength:{
            options:{min:3 ,max:256},
            errorMessage: 'state is too short'
    }
},
country:
    {
        notEmpty:{errorMessage:"country cannot be empty"},
        isString:{errorMessage:"country  must be a  characters"},
        isLength:{
            options:{min:3 ,max:256},
            errorMessage: 'country is too short'
    }
},
contact_number:
{
     notEmpty:{errorMessage:"contact cannot be empty"},
        isInt:{errorMessage:"contact number must be a number"},
        isLength:{
            options:{min:10 ,max:10},
            errorMessage: 'enter a valid number'
    }
}



}