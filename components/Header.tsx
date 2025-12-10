'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'


export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    // Add state to track if we've scrolled past the hero (approx. 80vh or similar)
    const [pastHero, setPastHero] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            setScrolled(scrollY > 0)
            // Assuming hero is roughly window height, but let's trigger it earlier for better feel
            setPastHero(scrollY > window.innerHeight * 0.8)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md border-b border-border/50 shadow-sm' : 'bg-transparent'
            } ${pastHero ? 'py-2' : ''}`}> {/* Reduce padding when past hero */}
            <div className={`container mx-auto px-4 ${pastHero ? 'py-1' : 'py-4'} flex items-center justify-between md:justify-center md:gap-32 transition-all duration-300`}>
                <div className={`flex items-center gap-2 transition-opacity duration-300 ${pastHero ? 'hidden md:flex' : 'flex'}`}>
                    <img
                        src="/logoheader.png"
                        alt="Rossana Altez Logo"
                        className="h-28 w-auto object-contain"
                    />
                </div>
                <nav className="hidden md:flex items-center gap-12">
                    <Link
                        href="#cursos"
                        className="font-serif text-lg tracking-widest uppercase text-foreground hover:text-accent transition-colors font-medium"
                    >
                        Cursos
                    </Link>
                    <Link
                        href="#conocenos"
                        className="font-serif text-lg tracking-widest uppercase text-foreground hover:text-accent transition-colors font-medium"
                    >
                        Conócenos
                    </Link>
                    <Link
                        href="#contacto"
                        className="font-serif text-lg tracking-widest uppercase text-foreground hover:text-accent transition-colors font-medium"
                    >
                        Contáctanos
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 text-foreground ${pastHero ? 'ml-auto mr-8' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 p-4 shadow-lg animate-in slide-in-from-top-2">
                    <nav className="flex flex-col gap-4">
                        <Link
                            href="#cursos"
                            className="font-serif text-lg tracking-widest uppercase text-foreground hover:text-accent transition-colors font-medium py-2 text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Cursos
                        </Link>
                        <Link
                            href="#conocenos"
                            className="font-serif text-lg tracking-widest uppercase text-foreground hover:text-accent transition-colors font-medium py-2 text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Conócenos
                        </Link>
                        <Link
                            href="#contacto"
                            className="font-serif text-lg tracking-widest uppercase text-foreground hover:text-accent transition-colors font-medium py-2 text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contáctanos
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
