"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { NavLink } from "@/components/nav-link"
import { BookViewingButton } from "@/components/book-viewing-button"

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(true)
        } else {
          // Scrolling up
          setIsVisible(true)
        }
      } else {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: "Showroom", href: "#showroom" },
    { name: "Expertise", href: "#expertise" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            <div className="relative px-4 py-3 rounded-full bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 shadow-lg">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur opacity-50"></div>

              {isMobile ? (
                <div className="relative flex items-center justify-between">
                  <Link href="/" className="font-bold text-lg flex items-center gap-2">
                    <Image
                      src="https://res.cloudinary.com/dofmnufq6/image/upload/v1750091297/f4aee19d-a48c-47c5-bed9-86aa37178f58_q6jkma.jpg"
                      alt="Luxury Auto Gallery Logo"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Luxury</span>
                    <span className="text-white">Auto</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </Button>
                </div>
              ) : (
                <div className="relative flex items-center gap-1">
                  <Link href="/" className="font-bold text-lg mr-4 flex items-center gap-2">
                    <Image
                      src="https://res.cloudinary.com/dofmnufq6/image/upload/v1750091297/f4aee19d-a48c-47c5-bed9-86aa37178f58_q6jkma.jpg"
                      alt="Luxury Auto Gallery Logo"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Luxury</span>
                    <span className="text-white">Auto</span>
                  </Link>
                  {navItems.map((item) => (
                    <NavLink
                      key={item.name}
                      href={item.href}
                      className="px-3 py-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                      onClick={handleNavClick}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                  <BookViewingButton />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      {isMobile && (
        <motion.div
          className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-md ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                className="px-8 py-4 text-2xl font-medium text-white hover:text-purple-400 transition-colors"
                onClick={handleNavClick}
              >
                {item.name}
              </NavLink>
            ))}
            <BookViewingButton />
          </div>
        </motion.div>
      )}
    </>
  )
}
