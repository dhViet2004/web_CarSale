"use client"

import { Button } from "@/components/ui/button"

export function BookViewingButton() {
  return (
    <Button
      size="sm"
      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
      onClick={() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Book Viewing
    </Button>
  )
} 