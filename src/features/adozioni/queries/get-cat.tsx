import { prisma } from "../../prisma";

export async function getCat(id: string) {
  return await prisma.cats.findUnique({
    where: { id: Number(id) },
  });
}
