'use client'

import { useState, useEffect } from 'react'

interface RotatingTextProps {
    words: string[]
    className?: string
}

export default function RotatingText({ words, className = "" }: RotatingTextProps) {
    const [index, setIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false)
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length)
                setIsVisible(true)
            }, 500) // Wait for fade out
        }, 3000) // Change every 3 seconds

        return () => clearInterval(interval)
    }, [words.length])

    return (
        <span className={`inline-block transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}>
            {words[index]}
        </span>
    )
}
