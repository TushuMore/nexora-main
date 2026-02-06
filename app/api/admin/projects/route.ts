import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import { isAdmin } from "@/lib/isAdmin";

// GET → list projects
export async function GET() {
  try {
    await isAdmin();
    await connectDB();

    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json(projects);
  } catch {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}

// POST → create project
export async function POST(req: Request) {
  try {
    await isAdmin();
    await connectDB();

    const data = await req.json();
    const project = await Project.create(data);

    return NextResponse.json(project);
  } catch {
    return NextResponse.json({ message: "Error creating project" }, { status: 400 });
  }

  
}
