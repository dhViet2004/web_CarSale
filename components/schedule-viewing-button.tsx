"use client"

import { Button } from "@/components/ui/button"

export function ScheduleViewingButton() {
  return (
    <Button
      variant="outline"
      className="border-zinc-700 text-zinc-300 hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
      onClick={() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Schedule Viewing
    </Button>
  )
} 