"use server"

import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/auth-config"
export async function getCart() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) return []

  const cart = await prisma.cart.findFirst({
    where: { userId: session.user.id },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  })

  return cart?.items || []
}
// =====================================================================================

export async function addToCart(productId: string) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) throw new Error("Not authenticated")

  const userId = session.user.id

  // cart موجود ولا لأ
  let cart = await prisma.cart.findFirst({ where: { userId } })
  if (!cart) {
    cart = await prisma.cart.create({ data: { userId } })
  }

  // العنصر موجود؟
  const existing = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, productId },
  })

  if (existing) {
    return await prisma.cartItem.update({
      where: { id: existing.id },
      data: { quantity: existing.quantity + 1 },
    })
  }

  return await prisma.cartItem.create({
    data: {
      cartId: cart.id,
      productId,
      quantity: 1,
    },
  })
}

// =====================================================================================

export async function increaseItem(productId: string) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) throw new Error("Not authenticated")

  const cart = await prisma.cart.findFirst({
    where: { userId: session.user.id },
    include: { items: true },
  })

  if (!cart) return console.log("noCart")

  const item = cart.items.find((i) => i.productId === productId)
  if (!item) return

  return await prisma.cartItem.update({
    where: { id: item.id },
    data: { quantity: item.quantity + 1 },
  })
}

// =====================================================================================

export async function decreaseItem(productId: string) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) throw new Error("Not authenticated")

  const cart = await prisma.cart.findFirst({
    where: { userId: session.user.id },
    include: { items: true },
  })

  if (!cart) return

  const item = cart.items.find((i) => i.productId === productId)
  if (!item) return

  if (item.quantity === 1) {
    return await prisma.cartItem.delete({
      where: { id: item.id },
    })
  }

  return await prisma.cartItem.update({
    where: { id: item.id },
    data: { quantity: item.quantity - 1 },
  })
}

// =====================================================================================

export async function removeItem(productId: string) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) throw new Error("Not authenticated")

  const cart = await prisma.cart.findFirst({
    where: { userId: session.user.id },
    include: { items: true },
  })

  if (!cart) return

  const item = cart.items.find((i) => i.productId === productId)
  if (!item) return

  await prisma.cartItem.delete({ where: { id: item.id } })
}

// =====================================================================================

// =====================================================================================

export async function getCartCount() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) return 0

  const cart = await prisma.cart.findUnique({
    where: { id: session.user.id },
    include: { items: true },
  })

  if (!cart) return 0

  const total = cart.items.reduce((sum, item) => sum + item.quantity, 0)

  return total
}

// export async function getCartTotalPrice() {
//   const cartData = await getUserCart()

//   const totalPrice = cartData.items.reduce(
//     (acc, item) => acc + item.quantity * item.product.price,
//     0
//   )

//   return totalPrice
// }
