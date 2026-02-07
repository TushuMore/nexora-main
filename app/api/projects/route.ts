import { NextResponse } from "next/server";
import Project from "@/models/Project";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();
    const projects = await Project.find();
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Projects API error:", error);
    return NextResponse.json([], { status: 500 });
  }
}
