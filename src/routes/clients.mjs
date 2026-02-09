import { Router } from "express";
import { ClientSchema } from "../mongoose/schema/ClientsSchema.mjs";
import { CompanySchema } from "../mongoose/schema/CompanySchema.mjs";

export const router = Router();

router.post("/api/client/add", async (req, res) => {
  try {
    const ClientName = req.body.name;
    const ClientGSTIN = req.body.GSTIN;
    const AddressLine1 = req.body?.AddressLine1 || null;
    const AddressLine2 = req.body?.AddressLine2 || null;
    const AddressLine3 = req.body?.AddressLine3 || null;
    const State = req.body?.state || null;
    const Code = req.body?.code || null;
    const session = req.session.id;
    const found = await CompanySchema.findOne({ session: session });
    const CompanyGSTIN = found.gstin;
    const CompanyName = found.company_name;
    const search = await ClientSchema.findOne({
      client_gstin: ClientGSTIN,
      company_gstin: CompanyGSTIN,
    });
    if (search) {
      return res
        .status(200)
        .json({ status: false, message: "Client Already Existed" });
    }
    const data = {
      client_name: ClientName,
      client_addresses: [
        {
          address_line1: AddressLine1,
          address_line2: AddressLine2,
          address_line3: AddressLine3,
          state: State,
          state_code: Code,
        },
      ],
      client_gstin: ClientGSTIN,
      company_name: CompanyName,
      company_gstin: CompanyGSTIN,
    };
    const Schema = new ClientSchema(data);
    Schema.save();
    res.status(200).json({ status: true, err: null });
  } catch (err) {
    res.status(200).json({ status: false, err: err });
  }
});

router.get("/api/clients", async (req, res) => {
  try {
    const session = req.session.id;
    const search = await CompanySchema.findOne({ session: session });
    const ComapnyName = search.company_name;
    const CompanyGSTIN = search.gstin;
    const fetchClients = await ClientSchema.find({
      company_name: ComapnyName,
      company_gstin: CompanyGSTIN,
    });
    res.status(200).json({status: true,data: fetchClients, err:null});
  } catch (err) {
    res.status(200).json({ status: false, err: err });
  }
});

router.post("/api/client/get", async (req, res) => {
  try {
    const ClientGSTIN = req.body.client_gstin;
    const ClientName = req.body.client_name;
    const session = req.session.id;
    const found = await CompanySchema.findOne({ session: session });
    if(!found)
      return res.status(200).json({status:false,message:"refresh the page company not found",err:null})
    const CompanyGSTIN = found.gstin;
    const CompanyName = found.company_name;
    const search = await ClientSchema.findOne({
      client_name: ClientName,
      client_gstin: ClientGSTIN,
      company_name: CompanyName,
      company_gstin: CompanyGSTIN,
    });
    if(search) 
    {
      return res.status(200).json({status:true, data:search, err:null});
    }
    else
      return res.status(200).json({ status: false, message: "cannot find company" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/api/client/address/edit", async (req, res) => {
  const ClientName = req.body.name;
  const ClientGSTIN = req.body.GSTIN;
  const AddressLine1 = req.body?.AddressLine1 || null;
  const AddressLine2 = req.body?.AddressLine2 || null;
  const AddressLine3 = req.body?.AddressLine3 || null;
  const State = req.body?.state || null;
  const Code = req.body?.code || null;
  const session = req.session.id;
  const index = req.body.index;
  const found = await CompanySchema.findOne({ session: session });
    if (!found) {
    return res
      .status(200)
      .json({ status: false, message: "Company not found refresh the page" });
  }
  const CompanyGSTIN = found.gstin;
  const CompanyName = found.company_name;
  const search = await ClientSchema.findOne({
    client_gstin: ClientGSTIN,
    company_gstin: CompanyGSTIN,
  });
  if (!search) {
    return res
      .status(200)
      .json({ status: false, message: "Client not found refresh the page" });
  }

  const data = {
        address_line1: AddressLine1,
        address_line2: AddressLine2,
        address_line3: AddressLine3,
        state: State,
        state_code: Code,
      }

  await ClientSchema.updateOne(
    {company_gstin:CompanyGSTIN,client_gstin:ClientGSTIN},
    {
    $set:{[`client_addresses.${index}`]:data}
    }
  )
  return res.status(200).json({status:true,err:null})
});

router.delete("/api/client/addressess/delete",async(req,res)=>{
const client_gstin = req.body.client_gstin
const index = req.body.index
const session = req.session.id
const found = await CompanySchema.findOne({session:session})
if(!found)
  return res.status(200).json({status:false,message:"Company not found please refresh the page"})
const company_gstin = found.gstin
await ClientSchema.updateOne(
  { client_gstin, company_gstin },
  { $unset: { [`client_addresses.${index}`]: 1 } }
);

await ClientSchema.updateOne(
  { client_gstin, company_gstin },
  { $pull: { client_addresses: null } }
);
return res.status(200).json({status:true,message:"Deleted client address successfully",err:null})
})