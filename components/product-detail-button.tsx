"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface ProductDetailButtonProps {
  productId: string
  type: "car" | "bike"
}

export function ProductDetailButton({ productId, type }: ProductDetailButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/products/${type}/${productId}`)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
      onClick={handleClick}
    >
      View Full Details
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  )
} 