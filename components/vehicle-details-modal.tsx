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
    return []
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-zinc-900 border-zinc-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{title}</DialogTitle>
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
            {title === "Mercedes" ? (
              <ul className="text-pink-200 list-disc list-inside space-y-1">
                <li>Carplay</li>
                <li>AMG Supersport Display</li>
                <li>Diagnostic, remove trouble codes</li>
                <li>12V battery error</li>
                <li>Map/Software/Firmware update</li>
                <li>Calibration/ Anti- protection</li>
              </ul>
            ) : title === "BMW" ? (
              <ul className="text-pink-200 list-disc list-inside space-y-1">
                <li>Retrofit aftermarket part</li>
                <li>M competition display</li>
                <li>Carplay</li>
                <li>Display function that requires activate from Dealer</li>
                <li>Error that requires coding</li>
              </ul>
            ) : title === "Audi" || title === "Volkswagen" ? (
              <ul className="text-pink-200 list-disc list-inside space-y-1">
                <li>Carplay</li>
                <li>Component protection</li>
                <li>RS- SuperSport display</li>
                <li>Option that require Dealer to activate</li>
                <li>Fault that requires programming</li>
                <li>Software/Firmware update</li>
              </ul>
            ) : title === "Pinarello Dogma F" || title === "Specialized S-Works" || title === "Factor" || title === "Trek Madone" ? (
              <div className="text-pink-200 space-y-3">
                <div>
                  <span className="font-semibold">Model & Price:</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>Used: 2500 USD</li>
                    <li>Brand new: 3500 USD</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold">Wheel set:</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>DT SWISS</li>
                    <li>Dura-Ace</li>
                    <li>Roval</li>
                    <li>Enve</li>
                    <li>CarbonWork</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold">Groupset:</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>Mechanical: Shimano 105 - 7170 Disk Brake</li>
                    <li>Electrical: Wheeltop wireless EDS TX groupset</li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold">Frame/Brand options:</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>Pinarello</li>
                    <li>S-Works</li>
                    <li>Factor</li>
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-pink-200">{description}</p>
            )}
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 