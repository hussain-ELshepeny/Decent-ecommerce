export type Product = {
  id: string
  name: string
  description: string
  price: number
  stock: number
  image?: string
  categoryId?: string | null
  createdAt: string
  updatedAt: string
  discountPercent?: number | null
  discountExpires?: string | null
  adminId?: string | null
}
