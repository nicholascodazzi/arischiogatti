import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch all cats from the database
    const cats = await prisma.cats.findMany();

    // console.log('Fetched cats:', cats);

    if (!cats) {
      throw new Error("No cats found");
    }

    // // Manually serialize BigInt to string in the result
    // const serializedCats = cats.map(cat => {
    //   return {
    //     ...cat,
    //     id: cat.id.toString(), // Convert BigInt to string
    //     // If you have other BigInt fields, convert them similarly
    //   };
    // });

    // Return the data as JSON
    return new Response(JSON.stringify(cats), { status: 200 });
  } catch (error) {
    // Log the error for more details
    console.error("Error fetching cats:", error);

    // Return a more detailed error message
    return new Response(
      JSON.stringify({ error: error.message || "Something went wrong" }),
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect(); // Ensure Prisma client disconnects
  }
}
