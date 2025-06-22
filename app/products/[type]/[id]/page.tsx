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
  const [selectedImage, setSelectedImage] = useState<string>("")
  const [showPanorama, setShowPanorama] = useState(false)
  const [showKeyless, setShowKeyless] = useState(false)
  const [showExterior, setShowExterior] = useState(false)
  const [showWheel, setShowWheel] = useState(false)
  const [showMultibeam, setShowMultibeam] = useState(false)

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      let productTitle = "Product Title";
      let productDescription = "Detailed product description will be loaded here.";
      let productImage = "/placeholder.jpg";
      
      // Set product details based on productId
      if (id === "mercedes-s-class") {
        productTitle = "Mercedes-Benz S-Class";
        productDescription = "The pinnacle of luxury and innovation, featuring cutting-edge technology and unparalleled comfort.";
        productImage = "https://res.cloudinary.com/dofmnufq6/image/upload/v1750094962/mercedes-amg-car-png-image-pngpix-9_sp35pz.png";
      } else if (id === "bmw-m-series") {
        productTitle = "BMW M Series";
        productDescription = "Performance meets luxury in this high-performance sports car lineup.";
      } else if (id === "audi-rs-etron-gt") {
        productTitle = "Audi RS e-tron GT";
        productDescription = "Electric performance redefined with stunning design and instant acceleration.";
      }

      setProductData({
        title: productTitle,
        description: productDescription,
        image: productImage,
        thumbnails: id === "mercedes-s-class"
          ? [
              "https://res.cloudinary.com/dofmnufq6/image/upload/v1750094962/mercedes-amg-car-png-image-pngpix-9_sp35pz.png",
              "https://res.cloudinary.com/dofmnufq6/image/upload/v1750592926/purepng.com-silver-mercedes-benz-s-class-cabriolet-carcarvehicletransportmercedes-benz-961524644496rvjcp_yc9egd.png",
              "https://res.cloudinary.com/dofmnufq6/image/upload/v1750595803/1740015980234_txkdxa.avif",
              "https://res.cloudinary.com/dofmnufq6/image/upload/v1750596069/1740039463363_zhz8ca.avif"
            ]
          : [
              "/placeholder.jpg",
              "/placeholder.jpg",
              "/placeholder.jpg",
              "/placeholder.jpg"
            ],
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
      // Reset selected image when product changes
      setSelectedImage("")
      setShowPanorama(false)
      setShowKeyless(false)
      setShowExterior(false)
      setShowWheel(false)
      setShowMultibeam(false)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [type, id])

  // Set selectedImage to first thumbnail when productData loaded
  useEffect(() => {
    if (productData && productData.thumbnails && productData.thumbnails.length > 0) {
      setSelectedImage(productData.thumbnails[0])
      setShowPanorama(false)
      setShowKeyless(false)
      setShowExterior(false)
      setShowWheel(false)
      setShowMultibeam(false)
    }
  }, [productData])

  // Tắt bong bóng khi đổi thumbnail
  useEffect(() => {
    setShowPanorama(false)
    setShowKeyless(false)
    setShowExterior(false)
    setShowWheel(false)
    setShowMultibeam(false)
  }, [selectedImage])

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
          {/* Nếu showPanorama thì hiện ảnh và chú thích đặc biệt */}
          {showPanorama ? (
            <>
              <img
                src="https://res.cloudinary.com/dofmnufq6/image/upload/v1750596069/1740039463363_zhz8ca.avif"
                alt="Cửa sổ trời Panorama"
                className="w-full h-full object-contain"
                loading="eager"
              />
              {/* Bubble tooltip near the hotspot */}
              <div
                className="absolute z-30"
                style={{ left: '42%', top: '5%' }} // move bubble higher above the hotspot
              >
                <div className="relative">
                  <div className="bg-zinc-900/95 border border-purple-500 text-white text-xs px-4 py-3 rounded-lg shadow-lg max-w-xs w-max whitespace-pre-line animate-fade-in">
                    <div className="font-bold text-sm mb-1">Cửa sổ trời Panorama</div>
                    <img
                      src="https://res.cloudinary.com/dofmnufq6/image/upload/v1750596399/1740015980925_ehcodf.avif"
                      alt="Cửa sổ trời Panorama"
                      className="w-full max-w-[220px] rounded mb-2 border border-zinc-700"
                      style={{background: '#222'}}
                    />
                    <div>Dù đóng hay mở, cửa sổ trời Panorama vẫn sẽ đem đến bạn cảm giác tự do và một không gian ấm cúng trong khoang nội thất. Nhìn từ bên ngoài, thiết kế ấn tượng của cửa sổ trời làm nên điểm nhấn độc đáo cho S-Class. Với cải tiến mới, bạn có thể điều khiển cửa sổ trời thông qua thanh trượt cảm ứng.</div>
                    {/* Arrow */}
                    <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 overflow-hidden">
                      <div className="w-4 h-4 bg-zinc-900 border-l border-b border-purple-500 rotate-45 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <img
              src={selectedImage || productData.image}
              alt={productData.title}
              className="w-full h-full object-contain"
              loading="eager"
            />
          )}
          {/* Hotspot for 4th image of Mercedes-Benz S-Class */}
          {id === "mercedes-s-class" && selectedImage === productData.thumbnails[3] && (
            <div>
              <Hotspot x={77.7} y={59.7} label="MULTIBEAM LED" onClick={() => { setShowMultibeam((v) => !v); setShowWheel(false); setShowExterior(false); setShowKeyless(false); setShowPanorama(false); }} clickable />
              <Hotspot x={36.8} y={51.7} label="Tay nắm cửa tự động KEYLESS-GO" onClick={() => { setShowKeyless((v) => !v); setShowPanorama(false); }} clickable />
              <Hotspot x={18.0} y={67.7} label="Mâm xe thiết kế mới" onClick={() => { setShowWheel((v) => !v); setShowExterior(false); setShowKeyless(false); setShowPanorama(false); }} clickable />
              <Hotspot x={32.8} y={64.4} label="Vẻ ngoài lôi cuốn" onClick={() => { setShowExterior((v) => !v); setShowKeyless(false); setShowPanorama(false); }} clickable />
              <Hotspot x={40.7} y={33.6} label="Cửa sổ trời Panorama" onClick={() => { setShowPanorama((v) => !v); setShowKeyless(false); }} clickable />
            </div>
          )}
          {/* Bubble for Tay nắm cửa tự động KEYLESS-GO */}
          {showKeyless && id === "mercedes-s-class" && selectedImage === productData.thumbnails[3] && (
            <div
              className="absolute z-30"
              style={{ left: '38.8%', top: '5%' }} // adjust top for above the hotspot
            >
              <div className="relative">
                <div className="bg-zinc-900/95 border border-purple-500 text-white text-xs px-4 py-3 rounded-lg shadow-lg max-w-xs w-max whitespace-pre-line animate-fade-in">
                  <div className="font-bold text-sm mb-1">Tay nắm cửa tự động KEYLESS-GO</div>
                  <img
                    src="https://res.cloudinary.com/dofmnufq6/image/upload/v1750596835/1740015980622_euqp6t.avif"
                    alt="Tay nắm cửa tự động KEYLESS-GO"
                    className="w-full max-w-[220px] rounded mb-2 border border-zinc-700"
                    style={{background: '#222'}}
                  />
                  <div>Với thiết kế liền mạch, tay nắm cửa tự động của S-Class được điều khiển thông qua chìa khóa thông minh cùng chức năng KEYLESS-GO. Cửa xe có thể khóa hoặc mở bằng cách chạm vào tay nắm mà không cần chìa.</div>
                  {/* Arrow */}
                  <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 overflow-hidden">
                    <div className="w-4 h-4 bg-zinc-900 border-l border-b border-purple-500 rotate-45 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Bubble for Vẻ ngoài lôi cuốn */}
          {showExterior && id === "mercedes-s-class" && selectedImage === productData.thumbnails[3] && (
            <div
              className="absolute z-30"
              style={{ left: '34.8%', top: '5%' }} // adjust top for above the hotspot
            >
              <div className="relative">
                <div className="bg-zinc-900/95 border border-purple-500 text-white text-xs px-4 py-3 rounded-lg shadow-lg max-w-xs w-max whitespace-pre-line animate-fade-in">
                  <div className="font-bold text-sm mb-1">Vẻ ngoài lôi cuốn</div>
                  <img
                    src="https://res.cloudinary.com/dofmnufq6/image/upload/v1750597253/1740015980400_qbnqt5.jpg"
                    alt="Vẻ ngoài lôi cuốn"
                    className="w-full max-w-[220px] rounded mb-2 border border-zinc-700"
                    style={{background: '#222'}}
                  />
                  <div>Sự giao thoa của nét đẹp đương đại và vẻ sang trọng khoáng đãng. Mercedes-Benz S-Class chú trọng vào những điều thiết yếu nhất: Tỉ lệ hoàn hảo bên ngoài và nét sang trọng đương đại bên trong. S-Class tiên phong cải tiến để luôn hiện diện một cách khác biệt và đậm sức hút.</div>
                  {/* Arrow */}
                  <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 overflow-hidden">
                    <div className="w-4 h-4 bg-zinc-900 border-l border-b border-purple-500 rotate-45 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Bubble for Mâm xe thiết kế mới */}
          {showWheel && id === "mercedes-s-class" && selectedImage === productData.thumbnails[3] && (
            <div
              className="absolute z-30"
              style={{ left: '20%', top: '5%' }} // adjust top for above the hotspot
            >
              <div className="relative">
                <div className="bg-zinc-900/95 border border-purple-500 text-white text-xs px-4 py-3 rounded-lg shadow-lg max-w-xs w-max whitespace-pre-line animate-fade-in">
                  <div className="font-bold text-sm mb-1">Mâm xe thiết kế mới</div>
                  <img
                    src="https://res.cloudinary.com/dofmnufq6/image/upload/v1750597408/1740015980529_loa3uw.avif"
                    alt="Mâm xe thiết kế mới"
                    className="w-full max-w-[220px] rounded mb-2 border border-zinc-700"
                    style={{background: '#222'}}
                  />
                  <div>Mâm xe làm từ hợp kim nhẹ cao cấp với vẻ đẹp vượt thời gian. Mâm xe S-Class được làm từ chất liệu hợp kim nhẹ cao cấp với kích thước từ 19 đến 20 inch (tuỳ mẫu xe). Phong cách thể thao của xe cũng bật lên ấn tượng qua thiết kế mâm hiện đại, bằng phẳng với rãnh rộng.</div>
                  {/* Arrow */}
                  <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 overflow-hidden">
                    <div className="w-4 h-4 bg-zinc-900 border-l border-b border-purple-500 rotate-45 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Bubble for MULTIBEAM LED */}
          {showMultibeam && id === "mercedes-s-class" && selectedImage === productData.thumbnails[3] && (
            <div
              className="absolute z-30"
              style={{ left: '25.7%', top: '1%' }} // adjust top for above the hotspot
            >
              <div className="relative">
                <div className="bg-zinc-900/95 border border-purple-500 text-white text-xs px-4 py-3 rounded-lg shadow-lg max-w-xs w-max whitespace-pre-line animate-fade-in">
                  <div className="font-bold text-sm mb-1">MULTIBEAM LED</div>
                  <img
                    src="https://res.cloudinary.com/dofmnufq6/image/upload/v1750597600/1740015980860_ixaw6v.avif"
                    alt="MULTIBEAM LED"
                    className="w-full max-w-[220px] rounded mb-2 border border-zinc-700"
                    style={{background: '#222'}}
                  />
                  <div>MULTIBEAM LED. Hệ thống đèn pha thích ứng MULTIBEAM LED điều khiển riêng biệt từng đèn LED mang lại tầm nhìn hoàn hảo trong mọi tình huống. Đèn chiếu xa giúp bạn nhìn thấy rõ những phương tiện giao thông khác mà không làm lóa mắt người đối diện. Hệ thống đèn thông minh chủ động Active Light, đèn vào cua và các tính năng chiếu sáng khác cũng hỗ trợ tối ưu tầm nhìn.</div>
                  {/* Arrow */}
                  <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 overflow-hidden">
                    <div className="w-4 h-4 bg-zinc-900 border-l border-b border-purple-500 rotate-45 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {productData.thumbnails.map((thumbnail: string, index: number) => (
            <div
              key={index}
              className={`aspect-video rounded-lg overflow-hidden bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 cursor-pointer hover:border-purple-500/50 transition-colors ${selectedImage === thumbnail ? 'ring-2 ring-purple-500/70' : ''}`}
              onClick={() => setSelectedImage(thumbnail)}
            >
              <img
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-contain"
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

// Hotspot component
function Hotspot({ x, y, label, onClick, clickable }: { x: number; y: number; label: string; onClick?: () => void; clickable?: boolean }) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="absolute z-20"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={clickable ? onClick : undefined}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
    >
      <span className={`block w-5 h-5 rounded-full bg-black/60 border-2 border-white flex items-center justify-center cursor-pointer ${clickable ? 'ring-2 ring-purple-500 animate-pulse' : ''}`}>
        <span className="block w-2 h-2 rounded-full bg-blue-400"></span>
      </span>
      {show && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full bg-zinc-900 text-white text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap mt-2 border border-purple-500">
          {label}
        </div>
      )}
    </div>
  );
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
          className="mb-8 text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-all duration-300"
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