"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Only initialize on client side to prevent hydration issues
    if (typeof window === "undefined") return

    // Initialize Lenis with smoother settings
    const lenis = new Lenis({
      duration: 1.8, // Increased for smoother scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8, // Slightly reduced for smoother feel
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      lerp: 0.08, // Lower lerp = smoother (0.1 is default, lower is smoother)
    })

    lenisRef.current = lenis

    // Expose Lenis instance to window for navbar access
    ;(window as any).lenis = lenis

    // Animation loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
      lenisRef.current = null
      if ((window as any).lenis) {
        delete (window as any).lenis
      }
    }
  }, [])

  // Update scroll on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
  }, [pathname])

  return <>{children}</>
}
