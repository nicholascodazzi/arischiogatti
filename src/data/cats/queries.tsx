import { prisma } from "../prisma";

export async function getCats() {
  return await prisma.cats.findMany();
}

export async function getSingleCat(id) {
  return await prisma.cats.findUnique({
    where: { id: Number(id) },
  });
}
