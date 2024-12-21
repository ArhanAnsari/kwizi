import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/connect";

export async function GET(req: NextRequest) {
  try {
    // Get all categories
    const categories = await prisma.category.findMany({});

    return NextResponse.json(categories);
  } catch (error) {
    console.log("There was an error getting Categories: ", error);
    return NextResponse.json(
      { error: "There was an error getting Categories" },
      {
        status: 500,
      }
    );
  }
}
