import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary-light/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/logo-new.png"
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-48 pb-32 px-4 bg-gradient-to-br from-primary-light via-primary to-primary-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Transforma Tu Vida con Coaching Holístico
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto text-pretty">
            Descubre tu mejor versión a través de mentorías personalizadas que integran mente, cuerpo y espíritu
          </p>
          <a
            href="#cursos"
            className="inline-block bg-accent hover:bg-accent-gold text-white px-10 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 shadow-lg"
          >
            Explorar Cursos
          </a>
        </div>
      </section>

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
                Soy Rossana Altez, coach holística dedicada a guiar personas hacia su transformación personal completa. Con más de 10 años de experiencia, combino técnicas ancestrales con metodologías modernas.
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
                  src="/placeholder.svg?key=cc093"
                  alt="Rossana Altez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-light rounded-full opacity-60 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "El coaching con Rossana cambió completamente mi perspectiva. Ahora tengo claridad sobre mi propósito y siento paz interior.",
                name: "María González",
                rating: 5
              },
              {
                quote: "Las mentorías holísticas me ayudaron a superar bloqueos emocionales que llevaba años cargando. Eternamente agradecida.",
                name: "Carmen Rodríguez",
                rating: 5
              },
              {
                quote: "Un enfoque único que integra todo mi ser. Rossana es una guía extraordinaria en este camino de transformación.",
                name: "Laura Martínez",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all hover:shadow-xl"
              >
                <div className="flex gap-1 mb-4">
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
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <p className="font-medium text-foreground">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Despertar Interior",
                description: "Reconecta con tu esencia y descubre tu propósito de vida a través de prácticas profundas de autoconocimiento.",
                price: "$199",
                duration: "8 semanas"
              },
              {
                title: "Equilibrio Emocional",
                description: "Aprende a gestionar tus emociones y crear estados de paz y armonía en tu vida diaria.",
                price: "$149",
                duration: "6 semanas"
              },
              {
                title: "Mentoría Personalizada",
                description: "Sesiones individuales adaptadas a tus necesidades específicas con seguimiento continuo.",
                price: "$299",
                duration: "12 semanas"
              },
              {
                title: "Sanación Holística",
                description: "Integra mente, cuerpo y espíritu con técnicas ancestrales y prácticas terapéuticas modernas.",
                price: "$179",
                duration: "10 semanas"
              },
              {
                title: "Abundancia Consciente",
                description: "Transforma tu relación con la prosperidad y atrae abundancia desde un lugar de consciencia.",
                price: "$169",
                duration: "8 semanas"
              },
              {
                title: "Liderazgo Femenino",
                description: "Empodera tu esencia femenina y desarrolla un liderazgo auténtico desde tu interior.",
                price: "$219",
                duration: "10 semanas"
              }
            ].map((course, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-2xl border border-primary-dark hover:border-accent transition-all hover:shadow-xl group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <div className="w-6 h-6 rounded-full bg-accent group-hover:bg-white transition-colors"></div>
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  {course.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-accent">
                    {course.price}
                  </span>
                  <span className="text-sm text-muted">
                    {course.duration}
                  </span>
                </div>
                <a
                  href="mailto:contacto@rossanaaltez.com"
                  className="block w-full text-center bg-accent hover:bg-accent-gold text-white py-3 rounded-full font-medium transition-all hover:scale-105"
                >
                  Ver Más
                </a>
              </div>
            ))}
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
