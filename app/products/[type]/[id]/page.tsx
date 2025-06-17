"use client"

import { useParams } from "next/navigation"
import { ArrowLeft, Mail } from "lucide-react"
import { FaFacebookF, FaYoutube } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import ParticleBackground from "@/components/particle-background"
import { Suspense, useEffect, useState } from "react"

// Separate component for product content
function ProductContent({ type, id }: { type: string; id: string }) {
  const [isLoading, setIsLoading] = useState(true)
  const [productData, setProductData] = useState<any>(null)

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setProductData({
        title: "Product Title",
        description: "Detailed product description will be loaded here.",
        specs: {
          engine: "V8 Twin-Turbo",
          power: "500 HP",
          transmission: "8-Speed Auto"
        },
        features: {
          interior: "Premium Leather",
          technology: "Advanced Driver Assistance",
          safety: "5-Star Rating"
        }
      })
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [type, id])

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-pulse">
        <div className="space-y-6">
          <div className="aspect-video rounded-xl bg-zinc-800/50"></div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="aspect-video rounded-lg bg-zinc-800/50"></div>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <div className="h-96 rounded-xl bg-zinc-800/50"></div>
          <div className="h-64 rounded-xl bg-zinc-800/50"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-6">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25"></div>
          <img
            src="/placeholder.jpg"
            alt="Product"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="aspect-video rounded-lg overflow-hidden bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 cursor-pointer hover:border-purple-500/50 transition-colors"
            >
              <img
                src="/placeholder.jpg"
                alt={`Thumbnail ${index}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <GlassmorphicCard>
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                {productData.title}
              </h1>
              <p className="text-zinc-400 text-lg">
                {productData.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-zinc-300">Technical Specifications</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Engine</span>
                    <span className="text-zinc-300">{productData.specs.engine}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Power</span>
                    <span className="text-zinc-300">{productData.specs.power}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Transmission</span>
                    <span className="text-zinc-300">{productData.specs.transmission}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-zinc-300">Features</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Interior</span>
                    <span className="text-zinc-300">{productData.features.interior}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Technology</span>
                    <span className="text-zinc-300">{productData.features.technology}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Safety</span>
                    <span className="text-zinc-300">{productData.features.safety}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-800">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Schedule Test Drive
              </Button>
            </div>
          </div>
        </GlassmorphicCard>

        <GlassmorphicCard>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Email</div>
                  <div className="font-medium">contact@automotiveprogramming.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  <FaFacebookF className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">Facebook</div>
                  <div className="font-medium">facebook.com/automotiveprogramming</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                  <FaYoutube className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-zinc-500">YouTube</div>
                  <div className="font-medium">youtube.com/automotiveprogramming</div>
                </div>
              </div>
            </div>
          </div>
        </GlassmorphicCard>
      </div>
    </div>
  )
}

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { type, id } = params

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>
      <ScrollProgress />
      <FloatingNav />

      <div className="container py-12 relative z-10">
        <Button
          variant="ghost"
          className="mb-8 text-zinc-400 hover:text-white"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Collection
        </Button>

        <Suspense fallback={
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-pulse">
            <div className="space-y-6">
              <div className="aspect-video rounded-xl bg-zinc-800/50"></div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="aspect-video rounded-lg bg-zinc-800/50"></div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="h-96 rounded-xl bg-zinc-800/50"></div>
              <div className="h-64 rounded-xl bg-zinc-800/50"></div>
            </div>
          </div>
        }>
          <ProductContent type={type as string} id={id as string} />
        </Suspense>
      </div>
    </div>
  )
} 