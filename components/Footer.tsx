import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer id="contacto" className="bg-foreground text-primary-light py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Contact */}
                    <div>
                        <h3 className="font-serif text-2xl font-bold mb-6 text-accent-light">
                            Contacto
                        </h3>
                        <div className="space-y-4">
                            <a
                                href="mailto:contacto@rossanaaltez.com"
                                className="flex items-center gap-3 hover:text-accent-light transition-colors"
                            >
                                <Mail className="w-5 h-5 text-accent" />
                                <span>contacto@rossanaaltez.com</span>
                            </a>
                            <a
                                href="tel:+1234567890"
                                className="flex items-center gap-3 hover:text-accent-light transition-colors"
                            >
                                <Phone className="w-5 h-5 text-accent" />
                                <span>+34 123 456 789</span>
                            </a>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-accent" />
                                <span>Madrid, España</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="font-serif text-2xl font-bold mb-6 text-accent-light">
                            Redes Sociales
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-accent hover:bg-accent-gold flex items-center justify-center transition-all hover:scale-110"
                            >
                                <Instagram className="w-6 h-6 text-white" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-accent hover:bg-accent-gold flex items-center justify-center transition-all hover:scale-110"
                            >
                                <Facebook className="w-6 h-6 text-white" />
                            </a>
                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-accent hover:bg-accent-gold flex items-center justify-center transition-all hover:scale-110"
                            >
                                <Phone className="w-6 h-6 text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-2xl font-bold mb-6 text-accent-light">
                            Enlaces Rápidos
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="#cursos"
                                    className="hover:text-accent-light transition-colors"
                                >
                                    Cursos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#conocenos"
                                    className="hover:text-accent-light transition-colors"
                                >
                                    Sobre Mí
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="mailto:contacto@rossanaaltez.com"
                                    className="hover:text-accent-light transition-colors"
                                >
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-accent/30 text-center text-sm">
                    <p>
                        © {new Date().getFullYear()} Rossana Altez - Coaching & Mentorías Holísticas. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
