"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { FaCar, FaBicycle } from "react-icons/fa"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { VehicleDetailsModal } from "@/components/vehicle-details-modal"

interface ProjectCardProps {
  title: string
  description?: string
  tags?: string[]
  image: string
  demoUrl: string
  repoUrl: string
  type: "car" | "bike"
  productId: string
  className?: string
}

export function ProjectCard({ title, description, tags = [], image, demoUrl, repoUrl, type, productId, className }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className={`group relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:border-purple-500/50 flex flex-col h-full ${className || ''}`}>
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative">
            <div className="relative aspect-video overflow-hidden rounded-t-xl">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-center mx-auto">{title}</h3>
                <p className="text-zinc-400">{description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-zinc-800/80 text-pink-300 border border-pink-500/20 hover:bg-zinc-700/80">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex justify-center mt-auto pt-4 border-t border-zinc-700/50">
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold shadow-md hover:from-indigo-500 hover:to-sky-500 border-0"
                  onClick={() => setIsModalOpen(true)}
                >
                  {type === "car" ? <FaCar className="mr-2 h-4 w-4" /> : <FaBicycle className="mr-2 h-4 w-4" />}
                  Quick View
                </Button>
              </div>
            </div>

            <div className="absolute top-3 right-3 z-20">
              <div
                className={`w-3 h-3 rounded-full ${isHovered ? "bg-green-500" : "bg-zinc-500"} transition-colors duration-300`}
              ></div>
            </div>
          </div>
        </div>
      </motion.div>

      <VehicleDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description || ""}
        tags={tags}
        image={image}
        type={type}
      />
    </>
  )
}
