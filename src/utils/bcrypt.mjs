import bcrypt from 'bcrypt'
import { configDotenv} from 'dotenv'
const saltTimes=10;

export async function HashPassword(password)
{
    const salt= await bcrypt.genSaltSync(saltTimes)
    const hashpw=await bcrypt.hashSync(password,salt)

    return hashpw
}

export function DeHashPassword(plain,password)
{
    const match =bcrypt.compareSync(plain,password)

    return match
}
