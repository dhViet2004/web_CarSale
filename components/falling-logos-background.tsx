"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

interface Logo {
  group: THREE.Group
  mesh: THREE.Mesh
  rotationSpeed: { x: number; y: number; z: number }
  fallSpeed: number
}

// List of logo image URLs
const logoImageUrls = [
  "https://res.cloudinary.com/dofmnufq6/image/upload/v1751644590/BMW-M-logo-1920x1080_gcyabo.png",
  "https://res.cloudinary.com/dofmnufq6/image/upload/v1751644585/6a7566b6e66d3bd5400892c2983cf1ef_cugvl5.png",
  "https://res.cloudinary.com/dofmnufq6/image/upload/v1751644585/BMW-M-Logo_uz5vh9.png",
  "https://res.cloudinary.com/dofmnufq6/image/upload/v1751644585/Volkswagen-Emblem_lmzqvi.png",
  "https://res.cloudinary.com/dofmnufq6/image/upload/v1751644584/factor-bike-logo_uycsi3.png",
  "https://res.cloudinary.com/dofmnufq6/image/upload/v1751644584/mercedes-logo-15879_r8pjcg.png",
  "https://res.cloudinary.com/dofmnufq6/image/upload/v1751644584/133-1331506_1317-x-486-25-audi-rs-logo-transparent_rnvcgn.png",
  "https://res.cloudinary.com/dofmnufq6/image/upload/v1751644584/png-transparent-pinarello-hd-logo_drmq6j.png",
  "https://res.cloudinary.com/dofmnufq6/image/upload/v1751644583/567-5672109_mercedes-amg-logo-png-transparent-png_x4yida.png",
  "https://res.cloudinary.com/dofmnufq6/image/upload/v1751644583/specialized-eps-vector-logo_vkzw09.png",
]

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

    // Texture loader
    const textureLoader = new THREE.TextureLoader()

    // Create logo geometries and materials with image textures
    const createLogo = (imageUrl: string, position: THREE.Vector3) => {
      // Shadow circle (soft blue, larger, very transparent)
      const shadowGeometry = new THREE.CircleGeometry(0.41, 32)
      const shadowMaterial = new THREE.MeshBasicMaterial({
        color: 0x38bdf8, // Tailwind sky-400
        transparent: true,
        opacity: 0.18, // Very soft shadow
        side: THREE.DoubleSide,
      })
      const shadowMesh = new THREE.Mesh(shadowGeometry, shadowMaterial)
      shadowMesh.position.set(0, 0, -0.03)

      // Background circle (pastel color, e.g. Tailwind bg-indigo-100, soft and semi-transparent)
      const bgGeometry = new THREE.CircleGeometry(0.36, 32)
      const bgMaterial = new THREE.MeshBasicMaterial({
        color: 0xe0e7ff, // Tailwind bg-indigo-100
        transparent: true,
        opacity: 0.5, // More transparent for softness
        side: THREE.DoubleSide,
      })
      const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial)
      bgMesh.position.set(0, 0, -0.01) // Slightly behind the logo image

      // Border circle (blue)
      const borderGeometry = new THREE.RingGeometry(0.33, 0.36, 32)
      const borderMaterial = new THREE.MeshBasicMaterial({
        color: 0x38bdf8, // Tailwind sky-400
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide,
      })
      const borderMesh = new THREE.Mesh(borderGeometry, borderMaterial)
      borderMesh.position.set(0, 0, 0)

      // Logo image circle
      const geometry = new THREE.CircleGeometry(0.3, 32)
      const texture = textureLoader.load(imageUrl)
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.95,
        side: THREE.DoubleSide,
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(0, 0, 0.01)

      // Group all meshes
      const group = new THREE.Group()
      group.add(shadowMesh)
      group.add(bgMesh)
      group.add(borderMesh)
      group.add(mesh)
      group.position.copy(position)

      return {
        group,
        mesh,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
        fallSpeed: Math.random() * 0.008 + 0.004, // slower fall
      }
    }

    // Create initial logos
    const logos: Logo[] = []
    for (let i = 0; i < 15; i++) {
      const imageUrl = logoImageUrls[Math.floor(Math.random() * logoImageUrls.length)]
      const position = new THREE.Vector3((Math.random() - 0.5) * 10, Math.random() * 5 + 5, (Math.random() - 0.5) * 2)
      const logo = createLogo(imageUrl, position)
      logos.push(logo)
      scene.add(logo.group)
    }
    logosRef.current = logos

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)

      // Update each logo
      logosRef.current.forEach((logo, index) => {
        // Rotation
        logo.group.rotation.x += logo.rotationSpeed.x
        logo.group.rotation.y += logo.rotationSpeed.y
        logo.group.rotation.z += logo.rotationSpeed.z

        // Falling motion
        logo.group.position.y -= logo.fallSpeed

        // Reset position when logo falls below screen
        if (logo.group.position.y < -6) {
          logo.group.position.y = Math.random() * 2 + 8
          logo.group.position.x = (Math.random() - 0.5) * 10
          logo.group.position.z = (Math.random() - 0.5) * 2

          // Randomly change the logo image
          const newImageUrl = logoImageUrls[Math.floor(Math.random() * logoImageUrls.length)]
          const newTexture = textureLoader.load(newImageUrl)
          ;(logo.mesh.material as THREE.MeshBasicMaterial).map = newTexture
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
        scene.remove(logo.group)
        logo.group.traverse((obj) => {
          if ((obj as THREE.Mesh).geometry) {
            (obj as THREE.Mesh).geometry.dispose()
          }
          const material = (obj as THREE.Mesh).material
          if (Array.isArray(material)) {
            material.forEach((m) => {
              if (m && typeof m.dispose === 'function') m.dispose()
            })
          } else if (material && typeof material.dispose === 'function') {
            material.dispose()
          }
        })
      })

      rendererRef.current?.dispose()
    }
  }, [visible])

  return (
    <div ref={mountRef} className="fixed inset-0 z-0" style={{ background: "transparent", pointerEvents: "none" }} />
  )
} 