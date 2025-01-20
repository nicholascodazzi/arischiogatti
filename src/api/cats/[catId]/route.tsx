import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { catId: string } }) {
  try {
    // Extract the catId from params
    const { catId } = params;

    // Fetch the cat by its ID from the database
    const cat = await prisma.cats.findUnique({
      where: { id: Number(catId) }, // Ensure the id is parsed as a number (not BigInt)
    });

    // If the cat doesn't exist, return a 404
    if (!cat) {
      return new NextResponse(
        JSON.stringify({ error: "Cat not found" }),
        { status: 404 }
      );
    }

    // Return the cat data as JSON
    return new NextResponse(JSON.stringify(cat), { status: 200 });
  } catch (error) {
    // Log the error for more details
    console.error("Error fetching cat:", error);

    // Return a more detailed error message
    return new NextResponse(
      JSON.stringify({ error: error.message || "Something went wrong" }),
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); // Ensure Prisma client disconnects
  }
}
