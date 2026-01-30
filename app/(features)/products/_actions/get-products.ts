// _actions/get-products.ts
"use server"
import prisma from "@/lib/prisma"

export async function getProducts(filters: {
  page: number
  limit: number
  q?: string
  category?: string
  sort?: string
}) {
  const { page, limit, q, category, sort } = filters
  const skip = (page - 1) * limit

  const where: any = {}

  if (q) {
    where.OR = [{ name: { contains: q, mode: "insensitive" } }]
  }

  if (category) {
    where.category = { name: category }
  }

  let orderBy: any = { createdAt: "desc" }
  if (sort === "price_asc") orderBy = { price: "asc" }
  if (sort === "price_desc") orderBy = { price: "desc" }

  const [products, total] = await Promise.all([
    prisma.product.findMany({
      where,
      skip,
      take: limit,
      orderBy,
    }),
    prisma.product.count({ where }),
  ])

  return {
    products,
    totalPages: Math.ceil(total / limit),
  }
}
