import {NextRequest, NextResponse} from "next/server";
import User from "@/models/userModel"
import {connect} from "@/dbConfig/config"
import {getData} from "@/helpers/getDataFromToken"
connect();

export async function GET(request : NextRequest){
    try {
        const username = await getData(request);
        console.log(username);
        const user = await User.findOne({name: username}).select("-password")
        return NextResponse.json({
            message:"User found",
            data:user
        })
    } catch (error) {
        console.log(error)
    }
}