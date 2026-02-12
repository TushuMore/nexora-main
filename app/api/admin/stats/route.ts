import { NextResponse } from "next/server";
import User from "@/models/User";
import Project from "@/models/Project";
import Contact from "@/models/Contact";
import { connectDB } from "@/lib/mongodb";
import Testimonial from "@/models/testimonials";

export async function GET() {
  try {
    await connectDB();

    const [users, projects, contacts,testimonials] = await Promise.all([
      User.countDocuments(),
      Project.countDocuments(),
      Contact.countDocuments(),
      Testimonial.countDocuments(),
    ]);

    return NextResponse.json({
      users,
      projects,
      contacts,
      testimonials
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
