import { connect } from "@/dbConfig/config";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/userModel";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;
    if (!email) {
      return NextResponse.json(
        { error: "Please enter your email!" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "Invalid email!" }, { status: 400 });
    }
    console.log(user);

    const res = await sendEmail({ email, type: "RESET", userId: user._id });
    console.log("email sent")

    return NextResponse.json({
      success: true,
      message: "Password reset link has been sent to your email!",
    });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
