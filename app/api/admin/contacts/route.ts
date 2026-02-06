import { NextResponse } from "next/server";
import Contact from "@/models/Contact";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB(); // ✅ FUNCTION KE ANDAR

    const contacts = await Contact.find().sort({ createdAt: -1 });

    return NextResponse.json(contacts);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}
