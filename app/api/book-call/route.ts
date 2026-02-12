import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import BookCall from "@/models/BookCall";

/* ---------------- POST: Create new lead ---------------- */
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const { name, phone, email, message } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const newCall = await BookCall.create({
      name,
      phone,
      email,
      message,
    });

    return NextResponse.json(
      { success: true, data: newCall },
      { status: 201 }
    );
  } catch (error) {
    console.error("Book Call POST Error:", error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}

/* ---------------- GET: Fetch all leads (Admin) ---------------- */
export async function GET() {
  try {
    await connectDB();
    const calls = await BookCall.find().sort({ createdAt: -1 });

    return NextResponse.json(calls);
  } catch (error) {
    console.error("Book Call GET Error:", error);
    return NextResponse.json([], { status: 500 });
  }
}
