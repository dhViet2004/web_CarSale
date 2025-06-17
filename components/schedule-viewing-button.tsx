"use client"

import { Button } from "@/components/ui/button"

export function ScheduleViewingButton() {
  return (
    <Button
      variant="outline"
      className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
      onClick={() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Schedule Viewing
    </Button>
  )
} 