import { NextResponse } from "next/server";
import User from "@/models/User";
import Project from "@/models/Project";
import Contact from "@/models/Contact";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    const [users, projects, contacts] = await Promise.all([
      User.countDocuments(),
      Project.countDocuments(),
      Contact.countDocuments(),
    ]);

    return NextResponse.json({
      users,
      projects,
      contacts,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
