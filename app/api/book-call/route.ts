import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import BookCall from "@/models/BookCall";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // aapka NextAuth config

/* ---------------- POST: Create new lead ---------------- */
export async function POST(req: Request) {
  try {
    // ✅ Check if user is logged in
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      );
    }

    await connectDB();
    const body = await req.json();
    const { name, phone, email, message } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const newCall = await BookCall.create({
      name,
      phone,
      email,
      message,
      userEmail: session.user?.email, // track kaun book kar raha
    });

    return NextResponse.json(
      { success: true, data: newCall },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Book Call POST Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Server Error" },
      { status: 500 }
    );
  }
}

/* ---------------- GET: Fetch all leads (Admin) ---------------- */
export async function GET() {
  try {
    await connectDB();

    // Optional: only allow admin to fetch calls
    // const session = await getServerSession(authOptions);
    // if (!session || session.user?.role !== "admin") {
    //   return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    // }

    const calls = await BookCall.find().sort({ createdAt: -1 });

    return NextResponse.json(calls);
  } catch (error) {
    console.error("Book Call GET Error:", error);
    return NextResponse.json([], { status: 500 });
  }
}
