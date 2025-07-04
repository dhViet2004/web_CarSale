"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

interface Logo {
  mesh: THREE.Mesh
  rotationSpeed: { x: number; y: number; z: number }
  fallSpeed: number
}

export default function FallingLogosBackground() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | undefined>(undefined)
  const rendererRef = useRef<THREE.WebGLRenderer | undefined>(undefined)
  const cameraRef = useRef<THREE.PerspectiveCamera | undefined>(undefined)
  const logosRef = useRef<Logo[]>([])
  const animationIdRef = useRef<number | undefined>(undefined)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Hide effect when About Me section is in view
    const aboutSection = document.getElementById("about")
    if (!aboutSection) return

    const handleScroll = () => {
      const rect = aboutSection.getBoundingClientRect()
      // If the top of the about section is at or above the top of the viewport, hide the effect
      setVisible(rect.top > 0)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!mountRef.current) return
    if (!visible) {
      // Hide canvas when not visible
      mountRef.current.style.opacity = "0"
      return
    } else {
      mountRef.current.style.opacity = "1"
    }

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Car brand logos data
    const carBrands = [
      { name: "Mercedes", color: "#C4C4C4" },
      { name: "BMW", color: "#0066CC" },
      { name: "Audi", color: "#BB0A30" },
      { name: "Volkswagen", color: "#1E3A8A" },
      { name: "Toyota", color: "#EB0A1E" },
      { name: "Honda", color: "#CC0000" },
      { name: "Ford", color: "#003478" },
      { name: "Chevrolet", color: "#FFC72C" },
      { name: "Nissan", color: "#C3002F" },
      { name: "Hyundai", color: "#002C5F" },
    ]

    // Create logo geometries and materials
    const createLogo = (brand: (typeof carBrands)[0], position: THREE.Vector3) => {
      // Create circular geometry for logo
      const geometry = new THREE.CircleGeometry(0.3, 32)

      // Create material with brand color
      const material = new THREE.MeshBasicMaterial({
        color: brand.color,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      })

      // Create text texture for brand name
      const canvas = document.createElement("canvas")
      const context = canvas.getContext("2d")!
      canvas.width = 256
      canvas.height = 256

      context.fillStyle = brand.color
      context.fillRect(0, 0, 256, 256)

      context.fillStyle = "white"
      context.font = "bold 32px Arial"
      context.textAlign = "center"
      context.textBaseline = "middle"
      context.fillText(brand.name, 128, 128)

      const texture = new THREE.CanvasTexture(canvas)
      const textMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.9,
      })

      const mesh = new THREE.Mesh(geometry, textMaterial)
      mesh.position.copy(position)

      return {
        mesh,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
        fallSpeed: Math.random() * 0.02 + 0.01,
      }
    }

    // Create initial logos
    const logos: Logo[] = []
    for (let i = 0; i < 15; i++) {
      const brand = carBrands[Math.floor(Math.random() * carBrands.length)]
      const position = new THREE.Vector3((Math.random() - 0.5) * 10, Math.random() * 5 + 5, (Math.random() - 0.5) * 2)
      const logo = createLogo(brand, position)
      logos.push(logo)
      scene.add(logo.mesh)
    }
    logosRef.current = logos

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)

      // Update each logo
      logosRef.current.forEach((logo, index) => {
        // Rotation
        logo.mesh.rotation.x += logo.rotationSpeed.x
        logo.mesh.rotation.y += logo.rotationSpeed.y
        logo.mesh.rotation.z += logo.rotationSpeed.z

        // Falling motion
        logo.mesh.position.y -= logo.fallSpeed

        // Reset position when logo falls below screen
        if (logo.mesh.position.y < -6) {
          logo.mesh.position.y = Math.random() * 2 + 8
          logo.mesh.position.x = (Math.random() - 0.5) * 10
          logo.mesh.position.z = (Math.random() - 0.5) * 2

          // Randomly change the logo
          const brand = carBrands[Math.floor(Math.random() * carBrands.length)]
          const canvas = document.createElement("canvas")
          const context = canvas.getContext("2d")!
          canvas.width = 256
          canvas.height = 256

          context.fillStyle = brand.color
          context.fillRect(0, 0, 256, 256)

          context.fillStyle = "white"
          context.font = "bold 32px Arial"
          context.textAlign = "center"
          context.textBaseline = "middle"
          context.fillText(brand.name, 128, 128)

          const texture = new THREE.CanvasTexture(canvas)
          ;(logo.mesh.material as THREE.MeshBasicMaterial).map = texture
          ;(logo.mesh.material as THREE.MeshBasicMaterial).needsUpdate = true
        }
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return

      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      window.removeEventListener("resize", handleResize)

      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement)
      }

      // Dispose of Three.js objects
      logosRef.current.forEach((logo) => {
        scene.remove(logo.mesh)
        logo.mesh.geometry.dispose()
        if (logo.mesh.material instanceof THREE.Material) {
          logo.mesh.material.dispose()
        }
      })

      rendererRef.current?.dispose()
    }
  }, [visible])

  return (
    <div ref={mountRef} className="fixed inset-0 z-0" style={{ background: "transparent", pointerEvents: "none" }} />
  )
} 