
import { ChevronDown } from 'lucide-react'
import Header from '../components/Header'
import CourseCard from '../components/CourseCard'
import ShimmerButton from '../components/ShimmerButton'
import RotatingText from '../components/RotatingText'
import ParticleBackground from '../components/ParticleBackground'
import AnimatedCounter from '../components/AnimatedCounter'
import AnimatedDivider from '../components/AnimatedDivider'
import TestimonialCarousel from '../components/TestimonialCarousel'
import Footer from '../components/Footer'

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
              Hacer un curso de desarrollo personal o profesional proporciona herramientas para mejorar habilidades, aumentar la empleabilidad, fomentar la autoconfianza y establecer metas claras, lo que resulta en un crecimiento integral y una mejor adaptación al entorno laboral y personal.
            </p>
          </div>

          {/* Cursos Holísticos */}
          <div className="mb-16">
            <h3 className="font-serif text-3xl font-bold text-accent mb-8 text-center">Cursos Holísticos</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Registros Akashicos", description: "El curso brinda herramientas para comprender mejor los patrones de vida, las decisiones y los procesos emocionales, permitiendo obtener claridad, guía y entendimiento. Además, ofrece la posibilidad de utilizar esta conexión tanto para el propio desarrollo como para acompañar a otros en su camino terapéutico o espiritual." },
                { title: "Manifestacion", description: "Hacer un curso de manifestación permite aprender técnicas para atraer y materializar deseos y metas en la vida, mejorando la autoconfianza y la claridad en los objetivos, y fomentando una mentalidad positiva que conduce a mayores oportunidades y éxito personal." },
                { title: "Tameana", description: "Hacer el curso de Tameana te enseña una técnica de sanación energética simple y potente para equilibrar emociones, reducir estrés y potenciar el crecimiento personal; además es práctica, fácil de aplicar a otros y a ti mismo, y abre posibilidades para trabajo terapéutico o autocuidado." },
                { title: "Sanacion de utero", description: "Hacer una sanación de útero ayuda a liberar traumas emocionales y bloqueos vinculados a la feminidad, mejora el bienestar emocional y la relación con tu cuerpo, puede apoyar la fertilidad y la vida sexual, y aporta mayor sensación de empoderamiento y equilibrio interior." },
                { title: "Terapia con cristales", description: "La terapia con cristales usa piedras y minerales para equilibrar la energía del cuerpo, apoyar la sanación emocional y mental, y potenciar la intención terapéutica mediante la colocación y la intención sobre puntos energéticos. Hacer una terapia con cristales puede equilibrar tu energía, reducir estrés y ansiedad, apoyar la sanación emocional, mejorar la claridad mental y potenciar intenciones personales mediante la interacción consciente con piedras y minerales." },
                { title: "Tarot", description: "El tarot es un sistema de cartas simbólicas usado como herramienta de orientación y autoconocimiento para explorar situaciones, patrones emocionales y posibles caminos mediante la intuición y la interpretación." },
                { title: "Estres y ansiedad", description: "Un curso o taller de estrés y ansiedad proporciona herramientas prácticas para manejar y reducir estos síntomas, mejora la comprensión de sus causas, fomenta el autocuidado y promueve técnicas de relajación y bienestar que pueden transformar la calidad de vida. El estrés es una respuesta física y emocional a demandas o presiones externas que puede provocar tensión y malestar. La ansiedad es una reacción emocional caracterizada por preocupaciones persistentes y miedos que pueden afectar el bienestar y la calidad de vida." }
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
                { title: "Programación Neuro Lingüística (PNL)", description: "La Programación Neurolingüística (PNL) es un conjunto de técnicas y modelos que estudian la conexión entre el lenguaje, el cerebro y el comportamiento, permitiendo a las personas reprogramar sus patrones de pensamiento y mejorar su comunicación y desarrollo personal. Hacer un curso de PNL mejora la comunicación, potencia habilidades personales y profesionales, facilita el cambio de creencias limitantes y fomenta el autoconocimiento, proporcionando herramientas prácticas para alcanzar metas y mejorar relaciones." },
                { title: "Desarrollo Personal y Profesional", description: "El desarrollo personal y profesional es el proceso continuo de adquirir habilidades, conocimientos y experiencias que mejoran la calidad de vida y potencian el rendimiento en el ámbito laboral, promoviendo el crecimiento integral de un individuo en diversas áreas." },
                { title: "Autoestima", description: "La autoestima es la percepción y valoración que una persona tiene de sí misma, que influye en su confianza, bienestar emocional y cómo se relaciona con los demás. Una autoestima positiva contribuye a un desarrollo personal y social saludable." }
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

      <Footer />
    </div>
  )
}
