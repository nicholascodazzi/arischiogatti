import { prisma } from "../../../lib/prisma";

export async function getCats() {
  return await prisma.cats.findMany();
}
