'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import CourseCard from './CourseCard'

const courses = [
    { title: "Estres y ansiedad", description: "Un curso o taller de estrés y ansiedad proporciona herramientas prácticas para manejar y reducir estos síntomas, mejora la comprensión de sus causas, fomenta el autocuidado y promueve técnicas de relajación y bienestar que pueden transformar la calidad de vida. El estrés es una respuesta física y emocional a demandas o presiones externas que puede provocar tensión y malestar. La ansiedad es una reacción emocional caracterizada por preocupaciones persistentes y miedos que pueden afectar el bienestar y la calidad de vida.", link: "https://hotmart.com/es/marketplace/productos/hagsxd-estres-y-ansiedad-du2fh/B103798851F?sck=HOTMART_PRODUCT_PAGE" },
    { title: "Constelaciones Familiares Sanar las Raices", description: "Las Constelaciones Familiares ayudan a sanar patrones y conflictos transmitidos generacionalmente, restableciendo el orden y el equilibrio en el sistema familiar para una vida más plena y consciente.", link: "https://hotmart.com/es/marketplace/productos/constelaciones-familiares-sanar-las-raices/K104067889G?sck=HOTMART_PRODUCT_PAGE" },
    { title: "Registros Akashicos", description: "El curso brinda herramientas para comprender mejor los patrones de vida, las decisiones y los procesos emocionales, permitiendo obtener claridad, guía y entendimiento. Además, ofrece la posibilidad de utilizar esta conexión tanto para el propio desarrollo como para acompañar a otros en su camino terapéutico o espiritual." },
    { title: "Manifestacion", description: "Hacer un curso de manifestación permite aprender técnicas para atraer y materializar deseos y metas en la vida, mejorando la autoconfianza y la claridad en los objetivos, y fomentando una mentalidad positiva que conduce a mayores oportunidades y éxito personal." },
    { title: "Tameana", description: "Hacer el curso de Tameana te enseña una técnica de sanación energética simple y potente para equilibrar emociones, reducir estrés y potenciar el crecimiento personal; además es práctica, fácil de aplicar a otros y a ti mismo, y abre posibilidades para trabajo terapéutico o autocuidado." },
    { title: "Sanacion de utero", description: "Hacer una sanación de útero ayuda a liberar traumas emocionales y bloqueos vinculados a la feminidad, mejora el bienestar emocional y la relación con tu cuerpo, puede apoyar la fertilidad y la vida sexual, y aporta mayor sensación de empoderamiento y equilibrio interior." },
    { title: "Terapia con cristales", description: "La terapia con cristales usa piedras y minerales para equilibrar la energía del cuerpo, apoyar la sanación emocional y mental, y potenciar la intención terapéutica mediante la colocación y la intención sobre puntos energéticos. Hacer una terapia con cristales puede equilibrar tu energía, reducir estrés y ansiedad, apoyar la sanación emocional, mejorar la claridad mental y potenciar intenciones personales mediante la interacción consciente con piedras y minerales." },
    { title: "Tarot", description: "El tarot es un sistema de cartas simbólicas usado como herramienta de orientación y autoconocimiento para explorar situaciones, patrones emocionales y posibles caminos mediante la intuición y la interpretación." }
]

export default function HolisticCoursesList() {
    const [showAll, setShowAll] = useState(false)
    const displayedCourses = showAll ? courses : courses.slice(0, 2)

    return (
        <div className="mb-16">
            <ScrollReveal>
                <h3 className="font-serif text-3xl font-bold text-accent mb-8 text-center">Cursos Holísticos</h3>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                {displayedCourses.map((course, index) => (
                    <ScrollReveal key={course.title} delay={index * 100}>
                        <CourseCard
                            title={course.title}
                            description={course.description}
                            duration="Consultar"
                            link={course.link}
                        />
                    </ScrollReveal>
                ))}
            </div>

            <div className="flex justify-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="group flex flex-col items-center gap-2 text-primary hover:text-accent transition-colors duration-300"
                >
                    <span className="font-medium text-lg tracking-wide uppercase">
                        {showAll ? 'Ver menos' : 'Ver más'}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        {showAll ? (
                            <ChevronUp className="w-6 h-6 animate-bounce" />
                        ) : (
                            <ChevronDown className="w-6 h-6 animate-bounce" />
                        )}
                    </div>
                </button>
            </div>
        </div>
    )
}
