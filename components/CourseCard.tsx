'use client'

import { useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'

interface CourseCardProps {
    title: string
    description: string
    duration: string
}

export default function CourseCard({ title, description, duration }: CourseCardProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className="bg-background p-6 md:p-8 rounded-2xl border border-primary-dark hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full group">
            <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <div className="w-6 h-6 rounded-full bg-accent group-hover:bg-white transition-colors"></div>
                </div>
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                {title}
            </h3>

            <div className="mb-6 flex-grow">
                <p className={`text-muted-foreground leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-2'}`}>
                    {description}
                </p>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-2 flex items-center gap-1 text-accent text-sm font-medium hover:text-accent-gold transition-colors"
                >
                    {isExpanded ? 'Menos' : 'Más'}
                    <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'animate-bounce'}`}
                    />
                </button>
            </div>

            <div className="mt-auto">
                <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-muted">
                        {duration}
                    </span>
                </div>

                <a
                    href="#"
                    className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent-gold text-white py-3 rounded-full font-medium transition-all hover:scale-105"
                >
                    Saber más del curso
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    )
}
