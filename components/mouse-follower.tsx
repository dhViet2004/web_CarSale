"use client"

import { useRef, useEffect, useState } from "react"

export function MouseFollower() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function updateMouse(e: MouseEvent | TouchEvent) {
      let clientX: number, clientY: number;
      if ("changedTouches" in e && e.changedTouches && e.changedTouches.length) {
        clientX = e.changedTouches[0].pageX;
        clientY = e.changedTouches[0].pageY;
      } else if ("pageX" in e) {
        clientX = e.pageX;
        clientY = e.pageY;
      } else {
        return;
      }
      setMousePosition({ x: clientX, y: clientY });
      setIsVisible(true);
    }
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
      window.addEventListener("touchstart", updateMouse, false)
      window.addEventListener("touchmove", updateMouse, false)
    } else if (typeof window !== 'undefined') {
      window.addEventListener("mousemove", updateMouse, false)
    }
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        window.removeEventListener("touchstart", updateMouse)
        window.removeEventListener("touchmove", updateMouse)
      } else if (typeof window !== 'undefined') {
        window.removeEventListener("mousemove", updateMouse)
      }
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    }
  }, [])

  return (
    <>
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[51] border border-pink-500 flex items-center justify-center"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s ease-in-out",
        }}
      >
        <span className="text-pink-500 text-xs font-bold">O</span>
      </div>
    </>
  )
}
