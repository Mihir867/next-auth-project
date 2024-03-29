import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const response = NextResponse.json({
      message: "Logout successfully",
      success: true,
    });

    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
