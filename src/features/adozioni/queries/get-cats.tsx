import { prisma } from "../../prisma";

export async function getCats() {
  return await prisma.cats.findMany();
}