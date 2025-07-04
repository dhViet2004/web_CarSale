import Link from "next/link"
import { ArrowRight, Mail, Twitter } from "lucide-react"
import { FaFacebookF, FaYoutube } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { BrowseCollectionButton } from "@/components/browse-collection-button"
import { ScheduleViewingButton } from "@/components/schedule-viewing-button"
import { DownloadResumeButton } from "@/components/download-resume-button"
import FallingLogosBackground from "@/components/falling-logos-background"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <FallingLogosBackground />
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">47HM's Performance</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Welcome to</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
                47HM's Performance
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              Discover our exclusive collection of premium automobiles and high-performance bicycles, crafted for those who demand excellence.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <BrowseCollectionButton />
              <ScheduleViewingButton />
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <FaFacebookF className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <FaYoutube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:hello@example.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-8 w-full">
              {/* Logo with advanced glow and rings */}
              <div className="relative flex items-center justify-center w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem]">
                {/* Outer Ring Glow */}
                <div className="absolute inset-0 rounded-full animate-glow-pulse opacity-30 border border-cyan-400/20"></div>
                {/* Secondary Outer Ring */}
                <div className="absolute inset-6 rounded-full border border-blue-400/30 animate-pulse"></div>
                {/* Background Atmospheric Glow */}
                <div
                  className="absolute inset-0 rounded-full opacity-20 blur-3xl animate-pulse"
                  style={{
                    background: "radial-gradient(circle, rgba(34,211,238,0.6) 0%, rgba(59,130,246,0.4) 40%, transparent 70%)",
                  }}
                ></div>
                {/* 4 Overlapping Horizontal Circles */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="relative flex items-center justify-center">
                    {/* Circle 1 */}
                    <div className="absolute left-[-60px] md:left-[-72px] lg:left-[-84px] top-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 z-10">
                      <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-pulse"></div>
                      <div className="absolute inset-1 rounded-full border border-blue-400/70 animate-spin-slow"></div>
                      <div
                        className="absolute inset-0 rounded-full opacity-50 blur-lg animate-pulse"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(34,211,238,0.9) 0%, rgba(34,211,238,0.3) 60%, transparent 80%)",
                        }}
                      ></div>
                      <div
                        className="absolute inset-2 rounded-full opacity-60 blur-sm animate-pulse animation-delay-500"
                        style={{
                          background: "radial-gradient(circle, rgba(34,211,238,1) 0%, transparent 70%)",
                        }}
                      ></div>
                    </div>
                    {/* Circle 2 */}
                    <div className="absolute left-[-24px] md:left-[-28px] lg:left-[-32px] top-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 z-20">
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-pulse animation-delay-1000"></div>
                      <div className="absolute inset-1 rounded-full border border-cyan-400/70 animate-spin-slow animation-delay-1000"></div>
                      <div
                        className="absolute inset-0 rounded-full opacity-50 blur-lg animate-pulse animation-delay-1000"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(59,130,246,0.9) 0%, rgba(59,130,246,0.3) 60%, transparent 80%)",
                        }}
                      ></div>
                      <div
                        className="absolute inset-2 rounded-full opacity-60 blur-sm animate-pulse animation-delay-1500"
                        style={{
                          background: "radial-gradient(circle, rgba(59,130,246,1) 0%, transparent 70%)",
                        }}
                      ></div>
                    </div>
                    {/* Circle 3 */}
                    <div className="absolute right-[-24px] md:right-[-28px] lg:right-[-32px] top-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 z-30">
                      <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-pulse animation-delay-2000"></div>
                      <div className="absolute inset-1 rounded-full border border-blue-400/70 animate-spin-slow animation-delay-2000"></div>
                      <div
                        className="absolute inset-0 rounded-full opacity-50 blur-lg animate-pulse animation-delay-2000"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(34,211,238,0.9) 0%, rgba(34,211,238,0.3) 60%, transparent 80%)",
                        }}
                      ></div>
                      <div
                        className="absolute inset-2 rounded-full opacity-60 blur-sm animate-pulse animation-delay-2500"
                        style={{
                          background: "radial-gradient(circle, rgba(34,211,238,1) 0%, transparent 70%)",
                        }}
                      ></div>
                    </div>
                    {/* Circle 4 */}
                    <div className="absolute right-[-60px] md:right-[-72px] lg:right-[-84px] top-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 z-40">
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-pulse animation-delay-3000"></div>
                      <div className="absolute inset-1 rounded-full border border-cyan-400/70 animate-spin-slow animation-delay-3000"></div>
                      <div
                        className="absolute inset-0 rounded-full opacity-50 blur-lg animate-pulse animation-delay-3000"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(59,130,246,0.9) 0%, rgba(59,130,246,0.3) 60%, transparent 80%)",
                        }}
                      ></div>
                      <div
                        className="absolute inset-2 rounded-full opacity-60 blur-sm animate-pulse animation-delay-3500"
                        style={{
                          background: "radial-gradient(circle, rgba(59,130,246,1) 0%, transparent 70%)",
                        }}
                      ></div>
                    </div>
                    {/* Connecting Light Flow */}
                    <div className="absolute inset-0 opacity-40">
                      <div className="absolute top-1/2 left-[-50px] right-[-50px] md:left-[-60px] md:right-[-60px] lg:left-[-70px] lg:right-[-70px] h-1 bg-gradient-to-r from-cyan-400/60 via-blue-400/80 via-cyan-400/80 to-blue-400/60 animate-pulse transform -translate-y-1/2"></div>
                      <div className="absolute top-1/2 left-[-40px] md:left-[-48px] lg:left-[-56px] w-2 h-2 bg-cyan-400 rounded-full animate-ping transform -translate-y-1/2"></div>
                      <div className="absolute top-1/2 left-[-12px] md:left-[-14px] lg:left-[-16px] w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-1000 transform -translate-y-1/2"></div>
                      <div className="absolute top-1/2 right-[-12px] md:right-[-14px] lg:right-[-16px] w-2 h-2 bg-cyan-400 rounded-full animate-ping animation-delay-2000 transform -translate-y-1/2"></div>
                      <div className="absolute top-1/2 right-[-40px] md:right-[-48px] lg:right-[-56px] w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-3000 transform -translate-y-1/2"></div>
                    </div>
                  </div>
                </div>
                {/* Logo Image */}
                <img
                  src="https://res.cloudinary.com/dofmnufq6/image/upload/v1751638690/Untitled_June_29_2025_at_17.39.16_1_ses3ov.png"
                  alt="47HM Logo"
                  className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain z-50"
                  style={{
                    filter:
                      "drop-shadow(0 0 40px rgba(34,211,238,0.8)) drop-shadow(0 0 80px rgba(59,130,246,0.6)) drop-shadow(0 0 120px rgba(34,211,238,0.4))",
                  }}
                />
                {/* Floating Particles around the formation */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[15%] left-[15%] w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute top-[85%] left-[25%] w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-1000 opacity-40"></div>
                  <div className="absolute top-[25%] right-[20%] w-1 h-1 bg-cyan-400 rounded-full animate-ping animation-delay-2000 opacity-60"></div>
                  <div className="absolute top-[75%] right-[15%] w-2 h-2 bg-blue-400 rounded-full animate-ping animation-delay-3000 opacity-40"></div>
                  <div className="absolute bottom-[15%] left-[50%] w-2 h-2 bg-cyan-400 rounded-full animate-ping animation-delay-4000 opacity-60"></div>
                  <div className="absolute top-[10%] left-[50%] w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-1000 opacity-40"></div>
                </div>
              </div>
              {/* Brand Name with enhanced glow and effects */}
              <div className="relative flex items-center justify-center mt-8 w-full max-w-2xl">
                {/* Bright Background Panel for Brand Name */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-3xl opacity-95 blur-sm"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl opacity-90"></div>
                {/* Enhanced Glow Effects on Bright Background */}
                <div
                  className="absolute inset-0 rounded-2xl blur-2xl opacity-60 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(236,72,153,0.6) 60%, rgba(34,211,238,0.4) 100%)",
                  }}
                ></div>
                {/* Secondary Glow Layer */}
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-70 pointer-events-none animate-pulse"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(34,211,238,0.6) 0%, rgba(59,130,246,0.4) 50%, rgba(236,72,153,0.3) 80%)",
                  }}
                ></div>
                {/* Brand Name Image with Multiple Effects */}
                <img
                  src="https://res.cloudinary.com/dofmnufq6/image/upload/v1751466569/web_brandlogo_z0aegn.png"
                  alt="47HM Brand Name"
                  className="relative w-40 md:w-56 lg:w-80 object-contain z-10"
                  style={{
                    filter:
                      "drop-shadow(0 0 8px rgba(0,0,0,0.3)) drop-shadow(0 0 16px rgba(59,130,246,0.4)) drop-shadow(0 0 24px rgba(236,72,153,0.3))",
                  }}
                />
                {/* Additional Glow Layers */}
                <div
                  className="absolute inset-4 rounded-xl opacity-50 blur-md animate-pulse animation-delay-1000 pointer-events-none"
                  style={{
                    background: "linear-gradient(45deg, rgba(59,130,246,0.5), rgba(236,72,153,0.5), rgba(34,211,238,0.5))",
                  }}
                ></div>
                {/* Energy Flow Lines */}
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                  <div className="absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/80 to-transparent animate-pulse rounded-full"></div>
                  <div className="absolute bottom-1/4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent animate-pulse animation-delay-2000 rounded-full"></div>
                  <div className="absolute left-1/4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-pink-500/80 to-transparent animate-pulse animation-delay-1000 rounded-full"></div>
                  <div className="absolute right-1/4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan-500/80 to-transparent animate-pulse animation-delay-3000 rounded-full"></div>
                </div>
                {/* Shadow Effect for Depth */}
                <div className="absolute inset-0 bg-black/10 rounded-3xl blur-lg transform translate-y-2 -z-10"></div>
                {/* Floating Particles around Brand Name */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[10%] left-[10%] w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping opacity-80"></div>
                  <div className="absolute top-[20%] right-[15%] w-1 h-1 bg-cyan-500 rounded-full animate-ping animation-delay-1000 opacity-70"></div>
                  <div className="absolute bottom-[15%] left-[20%] w-1 h-1 bg-pink-500 rounded-full animate-ping animation-delay-2000 opacity-80"></div>
                  <div className="absolute bottom-[10%] right-[10%] w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping animation-delay-3000 opacity-70"></div>
                  <div className="absolute top-[50%] left-[5%] w-1 h-1 bg-cyan-500 rounded-full animate-ping animation-delay-1500 opacity-75"></div>
                  <div className="absolute top-[50%] right-[5%] w-1 h-1 bg-pink-500 rounded-full animate-ping animation-delay-2500 opacity-75"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="https://res.cloudinary.com/dofmnufq6/image/upload/v1750094294/R_qqsqzz.jpg"
                  alt="Shine Kyaw Kyaw Aung"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  We specialize in curating the finest selection of luxury automobiles and premium bicycles. Our showroom features an exclusive collection of Mercedes, BMW, and Audi/Volkswagen vehicles, alongside elite cycling brands including Pinarello, S-Works, and Factor.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Our commitment to excellence extends beyond just selling vehicles. We provide a comprehensive automotive programming experience, ensuring each client receives personalized attention and expert guidance in their journey to find the perfect ride.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  For cycling enthusiasts, we offer an exclusive range of Replica Bikes, meticulously crafted to meet the highest standards of performance and design.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Premium Showroom</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">contact@automotiveprogramming.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Services</div>
                    <div className="font-medium">Automotive & Cycling</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Status</div>
                    <div className="font-medium text-green-500">Showroom Open</div>
                  </div>
                </div>

                <div className="mt-8">
                  <DownloadResumeButton />
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="expertise" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Our Expertise" subtitle="What we specialize in" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Luxury Vehicles" level={95} />
            <SkillBadge name="Performance Cars" level={90} />
            <SkillBadge name="Electric Vehicles" level={85} />
            <SkillBadge name="Road Bikes" level={95} />
            <SkillBadge name="Carbon Frames" level={90} />
            <SkillBadge name="Custom Builds" level={85} />
            <SkillBadge name="Vehicle Maintenance" level={90} />
            <SkillBadge name="Bike Fitting" level={95} />
            <SkillBadge name="Test Drives" level={90} />
            <SkillBadge name="Financing" level={85} />
            <SkillBadge name="Trade-ins" level={80} />
            <SkillBadge name="After-sales" level={95} />
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section id="showroom" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Vehicles" subtitle="Our premium collection" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Mercedes-Benz S-Class"
              description="The pinnacle of luxury and innovation, featuring cutting-edge technology and unparalleled comfort."
              tags={["Luxury", "Sedan", "Premium", "German"]}
              image="https://res.cloudinary.com/dofmnufq6/image/upload/v1750094841/mercedes-amg-car-png-image-pngpix-9_sp35pz.png"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
              type="car"
              productId="mercedes-s-class"
            />
            <ProjectCard
              title="BMW M Series"
              description="Performance meets luxury in this high-performance sports car lineup."
              tags={["Sports", "Performance", "Luxury", "German"]}
              image="https://res.cloudinary.com/dofmnufq6/image/upload/v1750095345/abf04066-985e-4c36-9397-27564cd175cb_qiutb8.webp"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
              type="car"
              productId="bmw-m-series"
            />
            <ProjectCard
              title="Audi RS e-tron GT"
              description="Electric performance redefined with stunning design and instant acceleration."
              tags={["Electric", "Performance", "Luxury", "German"]}
              image="https://res.cloudinary.com/dofmnufq6/image/upload/v1750095466/a923b13d-7db9-4a7d-83ac-a76b2a83c518_sr2s4a.webp"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
              type="car"
              productId="audi-rs-etron-gt"
            />
            <ProjectCard
              title="Pinarello Dogma F"
              description="Professional-grade carbon fiber frame with aerodynamic excellence."
              tags={["Road Bike", "Carbon", "Professional", "Italian"]}
              image="https://res.cloudinary.com/dofmnufq6/image/upload/v1750096115/e41fec40ad2578587cb453e2cda34242_wsftfr.png"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
              type="bike"
              productId="pinarello-dogma-f"
            />
            <ProjectCard
              title="Specialized S-Works Tarmac"
              description="The ultimate race machine, engineered for speed and efficiency."
              tags={["Road Bike", "Carbon", "Professional", "American"]}
              image="https://res.cloudinary.com/dofmnufq6/image/upload/v1750096042/94925-03_TARMAC-SW-LTD-TDF-BORA-RED-BULL_HERO-SQUARE_o7m0xi.png"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
              type="bike"
              productId="specialized-sworks-tarmac"
            />
            <ProjectCard
              title="Factor O2"
              description="British engineering excellence meets cutting-edge cycling technology."
              tags={["Road Bike", "Carbon", "Professional", "British"]}
              image="https://res.cloudinary.com/dofmnufq6/image/upload/v1750096115/e41fec40ad2578587cb453e2cda34242_wsftfr.png"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
              type="bike"
              productId="factor-o2"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="journey" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Our Journey" subtitle="Milestones and achievements" />

          <div className="mt-16">
            <Timeline
              items={[
                {
                  date: "2023",
                  title: "Expansion to Premium Electric Vehicles",
                  description: "Launched our exclusive electric vehicle division, featuring the latest models from Audi and BMW. Established state-of-the-art charging infrastructure at our showroom."
                },
                {
                  date: "2022",
                  title: "Partnership with Premium Cycling Brands",
                  description: "Secured exclusive dealership rights for Pinarello, Specialized S-Works, and Factor bicycles. Opened dedicated cycling showroom with professional fitting services."
                },
                {
                  date: "2021",
                  title: "Luxury Automotive Division",
                  description: "Established partnerships with Mercedes-Benz, BMW, and Audi for premium vehicle sales. Introduced comprehensive vehicle maintenance and after-sales services."
                },
                {
                  date: "2020",
                  title: "Automotive Programming Founded",
                  description: "Launched our premium automotive and cycling business with a focus on exceptional customer service and high-end vehicle selection."
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Contact Us" subtitle="Schedule a viewing or get in touch" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Showroom Information</h3>
              <div className="space-y-6">
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

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Showroom Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Open for private viewings by appointment</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">47HM's</span>
              <span className="text-blue-900"> Performance</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} 47HM's Performance. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <FaFacebookF className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <FaYoutube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:hello@example.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
