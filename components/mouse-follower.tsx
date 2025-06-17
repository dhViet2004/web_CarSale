"use client"

import { useRef, useEffect, useState } from "react"
import {
  Polyline,
  Renderer,
  Transform,
  Mesh,
  Vec3,
  Color,
} from "ogl"

export function MouseFollower() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!canvasRef.current) return

    const renderer = new Renderer({ dpr: 2, alpha: true })
    const gl = renderer.gl
    canvasRef.current.appendChild(gl.canvas)

    gl.clearColor(0, 0, 0, 0)

    const scene = new Transform()

    const lines: any[] = []

    const vertex = `
      attribute vec3 position;
      attribute vec3 next;
      attribute vec3 prev;
      attribute vec2 uv;
      attribute float side;

      uniform vec2 uResolution;
      uniform float uDPR;
      uniform float uThickness;

      varying vec2 vUv;

      vec4 getPosition() {
          vec2 aspect = vec2(uResolution.x / uResolution.y, 1);
          vec2 nextScreen = next.xy * aspect;
          vec2 prevScreen = prev.xy * aspect;

          vec2 tangent = normalize(nextScreen - prevScreen);
          vec2 normal = vec2(-tangent.y, tangent.x);
          normal /= aspect;
          normal *= sqrt(1.0 - pow(2.0 * uv.y - 1.0, 2.0));

          float pixelWidth = 1.0 / (uResolution.y / uDPR);
          normal *= pixelWidth * uThickness;

          // When the points are on top of each other, shrink the line to avoid artifacts.
          // float dist = length(nextScreen - prevScreen);
          // normal *= smoothstep(0.0, 0.02, dist);

          vec4 current = vec4(position, 1);
          current.xy -= normal * side;
          return current;
      }

      void main() {
          gl_Position = getPosition();
          vUv = uv;
      }
    `

    const fragment = `
      precision highp float;

      varying vec2 vUv;
      uniform vec3 uColorStart;
      uniform vec3 uColorEnd;

      void main() {
          gl_FragColor = vec4(mix(uColorStart, uColorEnd, vUv.y), 1.0);
      }
    `;

    function random(a: number, b: number) {
      const alpha = Math.random()
      return a * (1.0 - alpha) + b * alpha
    }

    // Revert to a single trail configuration
    const line = {
      spring: 0.001, // Tăng từ 0.0005 lên 0.001 để giảm quán tính
      friction: 0.98, // Giảm từ 0.995 xuống 0.98 để giảm độ trễ
      mouseVelocity: new Vec3(),
      // mouseOffset: new Vec3(random(-1, 1) * 0.04, random(-1, 1) * 0.04, 0), // Removed mouseOffset to center
      points: [] as Vec3[],
      polyline: {} as Polyline,
    }

    const count = 20
    for (let i = 0; i < count; i++) line.points.push(new Vec3())

    line.polyline = new Polyline(gl, {
      points: line.points,
      vertex,
      fragment, // Use the new fragment shader
      uniforms: {
        uColorStart: { value: new Color("#311847") }, // Darker purple for the start
        uColorEnd: { value: new Color("#ec4067") },   // Pink for the end
        uThickness: { value: 32 }, // Matched to cursor size
      },
    })

    line.polyline.mesh.setParent(scene)
    lines.push(line)

    function resize() {
      renderer.setSize(window.innerWidth, window.innerHeight)
      lines.forEach((line) => line.polyline.resize())
    }
    window.addEventListener("resize", resize, false)
    resize()

    const mouse = new Vec3()
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

      mouse.set(
        (clientX / gl.renderer.width) * 2 - 1,
        (clientY / gl.renderer.height) * -2 + 1,
        0
      )
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

    const tmp = new Vec3()
    let animationFrameId: number

    function update(t: DOMHighResTimeStamp) {
      animationFrameId = requestAnimationFrame(update)

      lines.forEach((line) => {
        for (let i = line.points.length - 1; i >= 0; i--) {
          if (!i) {
            tmp
              .copy(mouse)
              // .add(line.mouseOffset) // Removed mouseOffset
              .sub(line.points[i])
              .multiply(line.spring)
            line.mouseVelocity.add(tmp).multiply(line.friction)
            line.points[i].add(line.mouseVelocity)
          } else {
            line.points[i].lerp(line.points[i - 1], 0.9)
          }
        }
        line.polyline.updateGeometry()
      })

      renderer.render({ scene })
    }

    animationFrameId = requestAnimationFrame(update)

    return () => {
      window.removeEventListener("resize", resize)
      if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        window.removeEventListener("touchstart", updateMouse)
        window.removeEventListener("touchmove", updateMouse)
      } else if (typeof window !== 'undefined') {
        window.removeEventListener("mousemove", updateMouse)
      }
      cancelAnimationFrame(animationFrameId)
      if (gl.canvas.parentNode) {
        gl.canvas.parentNode.removeChild(gl.canvas)
      }
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    }
  }, [])

  return (
    <>
      <div
        ref={canvasRef}
        className="fixed inset-0 z-50 pointer-events-none"
        style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
      />
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
