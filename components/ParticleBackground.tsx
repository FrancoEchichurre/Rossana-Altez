'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let w = canvas.width = window.innerWidth
        let h = canvas.height = window.innerHeight

        const particles: { x: number, y: number, r: number, dx: number, dy: number, color: string }[] = []

        // Warm holistic colors for particles
        const colors = [
            'rgba(235, 200, 150, 0.3)', // light sand
            'rgba(190, 150, 100, 0.2)', // darker sand
            'rgba(255, 230, 200, 0.2)', // cream
            'rgba(210, 180, 140, 0.15)' // earthy
        ]

        const createParticles = () => {
            const particleCount = 20
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    r: Math.random() * 20 + 10, // Larger soft blobs
                    dx: (Math.random() - 0.5) * 0.5, // Slow movement
                    dy: (Math.random() - 0.5) * 0.5,
                    color: colors[Math.floor(Math.random() * colors.length)]
                })
            }
        }

        const animate = () => {
            if (!ctx) return
            ctx.clearRect(0, 0, w, h)

            particles.forEach(p => {
                p.x += p.dx
                p.y += p.dy

                // Bounce off walls (subtle)
                if (p.x < -50 || p.x > w + 50) p.dx *= -1
                if (p.y < -50 || p.y > h + 50) p.dy *= -1

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                ctx.fillStyle = p.color
                ctx.fill()

                // Soft glowing stroke effect? No, simple soft blobs via globalCompositeOperation likely better if we wanted bloom, but let's keep it simple performant.
                // Actually, let's blur the canvas via CSS for that "zen" feel
            })

            requestAnimationFrame(animate)
        }

        const handleResize = () => {
            w = canvas.width = window.innerWidth
            h = canvas.height = window.innerHeight
        }

        window.addEventListener('resize', handleResize)
        createParticles()
        animate()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60 blur-xl"
        />
    )
}
