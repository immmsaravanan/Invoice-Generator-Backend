import { Router } from "express";
import { LoginSchema, SignupSchema } from "../utils/validator-schema/LoginSchema.mjs"
import { checkSchema, validationResult, matchedData } from "express-validator";
import { CompanySchema } from "../mongoose/schema/CompanySchema.mjs";
import { DeHashPassword, HashPassword } from "../utils/bcrypt.mjs";
export const router = Router();
router.post("/api/login", checkSchema(LoginSchema), async (req, res) => {
  try{
  const result = validationResult(req);
  if (!result.errors.length == 0) {
    console.log(result.errors)
    return res.status(400).json({ status: false, err: result.errors });
  }
  const data = matchedData(req);
  const user = await CompanySchema.findOne({ username: data.username });

  if (!user) {
    return res
      .status(400)
      .json({ status: false, err: [{ msg: "UserName Not Found" }] });
  }

  if (!DeHashPassword(data.password, user.password)) {
    return res
      .status(400)
      .json({ status: false, err: [{ msg: "Incorrect Password" }] });
  }
  req.session.visited = true;
  await CompanySchema.findOne({ username: data.username }).updateOne({
    session:req.session.id,
  });
  return res.status(200).json({ status: true, err: null });
  } 
catch(err)
{
  return res.status(200).json({status:false,message:"Some error has been occurred while login",err:err})
}
});

router.post("/api/signup", checkSchema(SignupSchema), async (req, res) => {
  try
  {
  req.session.visited = true;
  if (req.body.password !== req.body.confirm_password) {
    return res
      .status(400)
      .json({ status: false, err: [{ msg: "Password Does Not Match" }] });
  }
  const result = validationResult(req);
  if (result.errors.length !== 0) {
    return res.status(400).json({ status: false, err: result.errors });
  }
  const data = matchedData(req);
  const found = await CompanySchema.findOne({
    $or: [
      { username: data.username },
      { gstin: data.gstin },
      { company_name: data.company_name },
      { company_email: data.company_email },
      {address_line1: data.address_line1},
      {address_line2: data.address_line2},
      {address_line3: data.address_line3},
      {country:data.country},
      {state:data.state},
      {contact_number:data.contact_number}
    ],
  });
  if (found) {
    if (found.username == data.username)
      return res
        .status(400)
        .json({ status: false, err: [{ msg: "username already Exist" }] });

    if (found.company_email == data.company_email)
      return res.status(400).json({
        status: false,
        err: [{ msg: "company email already Exist" }],
      });

    if (found.gstin == data.gstin)
      return res.status(400).json({
        status: false,
        err: [{ msg: "GSTIN already Exist" }],
      });
  }

  data.password = await HashPassword(data.password);
  data.session = req.session.id;
  const signup = new CompanySchema(data);
  signup.save();
  res.json({ status: true, err: null });
  } 
catch(err)
{
  return res.status(200).json({status:false,message:"Some error has been occurred while signup",err:err})
}
});

router.post("/api/loggedin",async(req,res)=>
{
  try
  {
  const logged= await CompanySchema.findOne({session:req.session.id})
if(!logged)
{
  return res.status(200).json({status:false})
}
else{
  return res.status(200).json({status:true})
}
} 
catch(err)
{
  return res.status(200).json({status:false,message:"Some error has been occurred while ckecking login status",err:err})
}
})