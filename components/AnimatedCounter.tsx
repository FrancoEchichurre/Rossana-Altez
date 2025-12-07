'use client'

import { useState, useEffect, useRef } from 'react'

interface AnimatedCounterProps {
    end: number
    duration?: number
    label: string
}

export default function AnimatedCounter({ end, duration = 2000, label }: AnimatedCounterProps) {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    let start = 0
                    const increment = end / (duration / 16)
                    const timer = setInterval(() => {
                        start += increment
                        if (start >= end) {
                            setCount(end)
                            clearInterval(timer)
                        } else {
                            setCount(Math.floor(start))
                        }
                    }, 16)
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [end, duration, hasAnimated])

    return (
        <div ref={ref} className="text-center">
            <div className="font-serif text-4xl md:text-5xl font-bold text-accent mb-2">
                {count}+
            </div>
            <p className="text-muted-foreground font-medium">{label}</p>
        </div>
    )
}
