import { NextResponse } from "next/server";
import Contact from "@/models/Contact";
import { connectDB } from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

/* ---------------- POST: Create new contact message ---------------- */
export async function POST(req: Request) {
  try {
    // ✅ Server-side login check
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      );
    }

    await connectDB();
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const newContact = await Contact.create({
      name,
      email,
      subject,
      message,
      userEmail: session.user?.email, // track kaun bhej raha
    });

    return NextResponse.json(
      { success: true, data: newContact },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Contact POST Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Server Error" },
      { status: 500 }
    );
  }
}

/* ---------------- GET: Fetch all contacts (Admin only) ---------------- */
export async function GET() {
  try {
    await connectDB();

    // ✅ Optional: only admin can fetch all contacts
    const session = await getServerSession(authOptions);
    if (!session || session.user?.role !== "admin") {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const contacts = await Contact.find().sort({ createdAt: -1 });

    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Contact GET Error:", error);
    return NextResponse.json([], { status: 500 });
  }
}
