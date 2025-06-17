"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface VehicleDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  tags: string[]
  image: string
  type: "car" | "bike"
}

export function VehicleDetailsModal({
  isOpen,
  onClose,
  title,
  description,
  tags,
  image,
  type
}: VehicleDetailsModalProps) {
  const getSpecifications = () => {
    if (title === "Mercedes-Benz S-Class") {
      return [
        { label: "Rated output", value: "270 kW / 367 HP" },
        { label: "Acceleration (0-100 km/h)", value: "5.3 s" },
        { label: "Wheelbase", value: "3216 mm" },
        { label: "Torque", value: "500 Nm" }
      ]
    }
    if (title === "BMW M Series") {
      return [
        { label: "Rated Output", value: "270 kW / 367 HP" },
        { label: "Acceleration", value: "5.3 s from 0 to 100 km/h" },
        { label: "Wheelbase", value: "3216 mm" },
        { label: "Torque", value: "500 Nm" }
      ]
    }
    if (title === "Audi RS e-tron GT") {
      return [
        { label: "Rated Output", value: "440 kW / 598 HP" },
        { label: "Acceleration", value: "3.3 s from 0 to 100 km/h" },
        { label: "Wheelbase", value: "2900 mm" },
        { label: "Torque", value: "830 Nm" }
      ]
    }
    return [
      { label: "Premium engineering", value: type === "car" ? "automotive" : "cycling" },
      { label: "Technology", value: "State-of-the-art" },
      { label: "Performance", value: "Exceptional" },
      { label: "Design", value: "Luxury comfort" }
    ]
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-zinc-900 border-zinc-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{title}</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-zinc-400 hover:text-pink-500"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="mt-4 space-y-6">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4">
            <p className="text-pink-200">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-zinc-800 text-pink-300 border border-pink-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-4 border-t border-zinc-800">
              <h4 className="text-lg font-medium mb-4 text-pink-300">Technical Specifications</h4>
              <div className="grid grid-cols-2 gap-4">
                {getSpecifications().map((spec, index) => (
                  <div key={index} className="space-y-1">
                    <p className="text-sm text-pink-200/70">{spec.label}</p>
                    <p className="text-lg font-medium text-pink-300">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 