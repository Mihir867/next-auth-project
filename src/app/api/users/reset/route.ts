import { connect } from "@/dbConfig/config";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token, password, cPassword } = reqBody;
    console.log(token)
    console.log(password)
    console.log(cPassword)
    if (password !== cPassword) {
      return NextResponse.json(
        { error: "Passwords do not match!" },
        { status: 400 }
      );
    }

    const user = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    }).select("+password");

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    const salt = await bcryptjs.genSalt(10);
    const newHashedPassword = await bcryptjs.hash(password, salt);

    user.password = newHashedPassword;
    user.forgotPasswordToken = undefined;
    user.forgotPasswordTokenExpiry = undefined;
    await user.save();
    console.log("Passowrd changed")

    // Create a new response with success message
    const response = NextResponse.json({
      success: true,
      message: "Password changed successfully!",
    });

    // Set the token as a cookie header
    response.headers.set("Set-Cookie", `resetToken=${token}; Path=/`);

    return response;
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
