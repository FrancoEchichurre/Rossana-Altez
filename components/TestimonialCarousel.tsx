'use client'

import { useState, useEffect } from 'react'

interface Testimonial {
    quote: string
    name: string
    rating: number
}

interface TestimonialCarouselProps {
    items: Testimonial[]
}

export default function TestimonialCarousel({ items }: TestimonialCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % items.length)
        }, 6500) // 6.5 seconds

        return () => clearInterval(interval)
    }, [items.length])

    const getPositionStyles = (index: number) => {
        // Calculate position relative to active index
        // This logic works best for exactly 3 items as requested
        // 0 = active, -1 = left, 1 = right (handling wrap-around)

        if (index === activeIndex) {
            return "opacity-100 scale-100 z-20 blur-0 translate-x-0"
        }

        const prevIndex = (activeIndex - 1 + items.length) % items.length
        const nextIndex = (activeIndex + 1) % items.length

        if (index === prevIndex) {
            return "opacity-40 scale-90 z-10 blur-sm -translate-x-[15%] md:-translate-x-[50%]"
        }

        if (index === nextIndex) {
            return "opacity-40 scale-90 z-10 blur-sm translate-x-[15%] md:translate-x-[50%]"
        }

        // Fallback for hidden items if we had more than 3
        return "opacity-0 scale-75 z-0 hidden"
    }

    return (
        <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
            {items.map((testimonial, index) => (
                <div
                    key={index}
                    className={`absolute w-full max-w-md transition-all duration-700 ease-in-out ${getPositionStyles(index)}`}
                >
                    <div className="bg-card p-8 rounded-2xl border border-accent/20 shadow-xl mx-4">
                        <div className="flex gap-1 mb-4 justify-center">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-5 h-5 fill-accent-gold"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                            ))}
                        </div>

                        <p className="font-medium text-foreground text-lg mb-4 text-center font-serif">
                            {testimonial.name}
                        </p>

                        <p className="text-muted-foreground leading-relaxed italic text-center">
                            "{testimonial.quote}"
                        </p>
                    </div>
                </div>
            ))}

            {/* Pagination Dots */}
            <div className="absolute bottom-4 flex gap-2 z-30">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-accent w-4' : 'bg-accent/30'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
