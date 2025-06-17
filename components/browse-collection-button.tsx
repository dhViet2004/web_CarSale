"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BrowseCollectionButton() {
  return (
    <Button 
      className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0"
      onClick={() => {
        document.getElementById('showroom')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <span className="relative z-10 flex items-center">
        Browse Collection <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
    </Button>
  )
} 