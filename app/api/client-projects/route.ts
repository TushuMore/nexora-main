import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ClientProject from "@/models/ClientProject";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // aapka next-auth config

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

    // Basic validation
    if (!body.name || !body.projectType || !body.budget || !body.timeline) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create project with user info
    const newProject = await ClientProject.create({
      name: body.name,
      projectType: body.projectType,
      budget: body.budget,
      timeline: body.timeline,
      description: body.description,
      userEmail: session.user?.email, // track which user submitted
    });

    return NextResponse.json(
      { success: true, data: newProject },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { success: false, message: error.message || "Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const projects = await ClientProject.find().sort({ createdAt: -1 });

    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch client projects" },
      { status: 500 }
    );
  }
}
