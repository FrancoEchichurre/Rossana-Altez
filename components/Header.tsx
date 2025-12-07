'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'


export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md border-b border-border/50 shadow-sm' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between md:justify-center md:gap-32">
                <div className="flex items-center gap-2">
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
                    className="md:hidden p-2 text-foreground"
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
