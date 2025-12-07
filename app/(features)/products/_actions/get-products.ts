"use server"
import prisma from "@/lib/prisma"

export async function getProducts(page: number = 1, limit: number = 2) {
  // get products by pagination
  const skip = (page - 1) * limit
  const products = await prisma.product.findMany({
    take: limit,
    skip,
    orderBy: {
      createdAt: "desc",
    },
  })

  // total products
  const totalProducts = await prisma.product.count()

  return {
    products,
    totalProducts,
    totalPages: Math.ceil(totalProducts / limit),
  }
}
