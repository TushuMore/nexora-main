import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Testimonial from "@/models/testimonials";

export async function GET() {
  await connectDB();
  const testimonials = await Testimonial.find().sort({
    createdAt: -1,
  });

  return NextResponse.json(testimonials);
}


export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const testimonial = await Testimonial.create({
      name: body.name,
      role: body.role,
      message: body.message,
    });

    return NextResponse.json(testimonial);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add testimonial" },
      { status: 500 }
    );
  }
}
