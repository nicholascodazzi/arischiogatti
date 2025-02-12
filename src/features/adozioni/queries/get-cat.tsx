import { prisma } from "../../../lib/prisma";

export async function getCat(id: string) {
  return await prisma.cats.findUnique({
    where: { id: Number(id) },
  });
}
