"use server";

import { prisma } from "@/src/lib/prisma";

export const fetchNCats = async (n: number) => {
  return await prisma.cats.findMany({
    take: n,
  });
};
