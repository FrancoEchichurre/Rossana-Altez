import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone, MapPin, ChevronDown } from 'lucide-react'
import Header from '../components/Header'
import CourseCard from '../components/CourseCard'
import ShimmerButton from '../components/ShimmerButton'
import RotatingText from '../components/RotatingText'
import ParticleBackground from '../components/ParticleBackground'
import AnimatedCounter from '../components/AnimatedCounter'
import AnimatedDivider from '../components/AnimatedDivider'
import TestimonialCarousel from '../components/TestimonialCarousel'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      <section className="min-h-screen flex flex-col justify-center pt-48 pb-32 px-4 bg-gradient-to-br from-primary-light via-primary to-primary-dark relative overflow-hidden">
        <ParticleBackground />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="font-serif text-4xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Transforma Tu Vida con <span className="block mt-2"><RotatingText words={["Libertad Económica y Emocional", "Coaching Holístico", "Bienestar Integral", "Paz Interior"]} className="text-accent" /></span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto text-pretty px-4">
            Descubre tu mejor versión a través de mentorías personalizadas, cursos Online de crecimiento personal y terapias Holísticas.
          </p>
          <ShimmerButton href="#cursos">
            Explorar
          </ShimmerButton>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/80">
          <ChevronDown className="w-10 h-10" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b border-border/50">
        <div className="container mx-auto flex flex-wrap justify-center gap-12 md:gap-24">
          <AnimatedCounter end={15} label="Años de Experiencia" />
          <AnimatedCounter end={500} label="Vidas Transformadas" />
          <AnimatedCounter end={20} label="Cursos Impartidos" />
        </div>
      </section>

      <AnimatedDivider />

      {/* About Section */}
      <section id="conocenos" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-16 bg-accent"></div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mx-6">
              Conócenos
            </h2>
            <div className="h-px w-16 bg-accent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Soy Rossana Altez, coaching holística dedicada a guiar personas hacia su transformación personal completa. Con más de 15 años de experiencia, combino técnicas ancestrales con metodologías modernas como programación neuro lingüística (PNL) y programas de crecimiento personal.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Mi enfoque integra el bienestar emocional, mental y espiritual, creando un espacio seguro donde puedes reconectar contigo mismo y descubrir tu verdadero potencial.
              </p>
              <div className="flex items-center gap-4 text-accent font-medium">
                <div className="w-12 h-px bg-accent"></div>
                <span>Crecimiento • Transformación • Equilibrio</span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-primary-dark">
                <img
                  src="/rossana-about.jpg"
                  alt="Rossana Altez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-light rounded-full opacity-60 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block h-1 w-24 bg-accent mb-4"></div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Testimonios
            </h2>
            <p className="text-lg text-muted-foreground">
              Lo que dicen nuestros clientes
            </p>
          </div>

          <TestimonialCarousel
            items={[
              {
                quote: "Comence con una apertura de registros akashicos, este gran paso hacia mi busqueda de respuesta. Fue una gran guía.",
                name: "Jessica Tabeira",
                rating: 5
              },
              {
                quote: "Conoci a Rossana en 2018, en uno de los momentos mas dificiles de mi adolecencia. LLego a mi vida como una luz en medio de la oscuridad, justo cuando mas necesitaba claridad y contención.",
                name: "Anahí Gonzáles",
                rating: 5
              },
              {
                quote: "Cuando conoci a Rossana en 2017 me encontraba con el autoestima baja y sin confianza en mi misma, a través del acompañamiento como coaching pude crear la mejor version de mi, soltando los miedos y dejando de repetir patrones.",
                name: "Stella Toledo",
                rating: 5
              }
            ]}
          />
        </div>
      </section>

      <AnimatedDivider />

      {/* Courses Section */}
      <section id="cursos" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nuestros Cursos
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">
              Programas diseñados para tu crecimiento integral
            </p>
          </div>

          {/* Cursos Holísticos */}
          <div className="mb-16">
            <h3 className="font-serif text-3xl font-bold text-accent mb-8 text-center">Cursos Holísticos</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Registros Akashicos", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                { title: "Manifestacion", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                { title: "Tameana", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                { title: "Sanacion de utero", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                { title: "Terapia con cristales", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                { title: "Tarot", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                { title: "Estres y ansiedad", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
              ].map((course, index) => (
                <CourseCard
                  key={index}
                  title={course.title}
                  description={course.description}
                  duration="Consultar"
                />
              ))}
            </div>
          </div>

          {/* Cursos de Crecimiento Personal */}
          <div>
            <h3 className="font-serif text-3xl font-bold text-accent mb-8 text-center">Cursos de Crecimiento Personal</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Programación Neuro Lingüística (PNL)", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                { title: "Desarrollo Personal", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
                { title: "Autoestima", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
              ].map((course, index) => (
                <CourseCard
                  key={index}
                  title={course.title}
                  description={course.description}
                  duration="Consultar"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}
