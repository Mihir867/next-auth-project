import {connect} from "@/dbConfig/config"
import User from "@/models/userModel"
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;
        console.log(reqBody);

        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error:"User does not exist"}, {status:400})
        }

        //if password is correct
        const validPass = await bcryptjs.compare(password, user.password);
        if(!validPass){
            return NextResponse.json({error:"Invalid password"}, {status:400})
        } 

        //create token data
        const tokenData = {id: user._id, name: user.name, email: user.email, number: user.number}
        const token =  jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

        const response = NextResponse.json({
            message:"Logged In succesfully"
        })
        response.cookies.set("token", token, {httpOnly: true})
        return response;
    } catch (error) {
        return NextResponse.json({error}, {status:500})
    }
}