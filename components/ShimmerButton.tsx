'use client'

import { ReactNode } from 'react'

interface ShimmerButtonProps {
    children: ReactNode
    href?: string
    className?: string
    onClick?: () => void
}

export default function ShimmerButton({ children, href, className = "", onClick }: ShimmerButtonProps) {
    const baseClasses = `
    relative overflow-hidden group bg-accent hover:bg-accent-gold text-white px-10 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 shadow-lg inline-flex items-center justify-center
    after:content-[''] after:absolute after:top-0 after:left-[-100%] after:w-[50%] after:h-full 
    after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent 
    after:skew-x-[-20deg] group-hover:after:animate-shimmer
    ${className}
  `

    if (href) {
        return (
            <a href={href} className={baseClasses}>
                {children}
            </a>
        )
    }

    return (
        <button onClick={onClick} className={baseClasses}>
            {children}
        </button>
    )
}
