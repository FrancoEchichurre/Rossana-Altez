"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Instagram, Facebook } from 'lucide-react';

// ---------------------------------------------------------
// 1. UTILIDAD DE ANIMACIÓN (Intersection Observer)
// ---------------------------------------------------------
const AnimatedSection = ({ children, className = "", id }: any) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      id={id}
      ref={domRef}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </section>
  );
};

// ---------------------------------------------------------
// 2. COMPONENTES DE DISEÑO AISLADOS
// ---------------------------------------------------------

const Header = () => (
  <header className="w-full top-0 sticky z-50 bg-background/80 backdrop-blur-md shadow-[0_4px_24px_rgba(45,45,45,0.05)]">
    <nav className="flex justify-between items-center max-w-[1200px] mx-auto px-margin-mobile md:px-gutter h-20">
      <div className="flex items-center relative pl-16 md:pl-32">
        <img alt="Rossana Altez Logo" className="absolute left-[-12px] md:left-[-24px] top-1/2 -translate-y-1/2 h-24 w-24 md:h-36 md:w-36 object-contain drop-shadow-sm" src="https://lh3.googleusercontent.com/aida/AP1WRLsk5ZM5MO-0faWyMRwqzp7CgCUUSMbm9rPc8Y-wnytnWIqsFxMIcIZ6JHLL82RNrpsYVWvYWEf8hR1rkOOTeSzzib2xKH0ebmvUrXFvuaORrbvo-8j4wxOFhEtzd1LGNq9fnkvYtyUtP8NxZHJgiwy1k1i2a2picrfX5RYKbrXGLRDeZgFqBxVKQS7qK1GD57_MFTf5BvEJO_-yrX9PHmp2o6--jkdMoo0TRKqoPWKIZYaiAv_AgNQp" />
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a className="font-label-md text-label-md text-charcoal-text hover:text-primary transition-colors" href="#cursos">Mentorías</a>
        <a className="font-label-md text-label-md text-charcoal-text hover:text-primary transition-colors" href="#cursos">Programas</a>
        <a className="font-label-md text-label-md text-charcoal-text hover:text-primary transition-colors" href="#conocenos">Sobre Mí</a>
        <a className="font-label-md text-label-md text-charcoal-text hover:text-primary transition-colors" href="#faq">FAQ</a>
        <a className="font-label-md text-label-md text-charcoal-text hover:text-primary transition-colors" href="#contacto">Contacto</a>
      </div>
      <a className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md hover:opacity-80 transition-all active:scale-95" href="#contacto">
        Agendar Sesión
      </a>
    </nav>
  </header>
);

const Hero = () => (
  <AnimatedSection className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0"></div>
    <div className="relative z-10 max-w-[1200px] mx-auto px-margin-mobile md:px-gutter text-center space-y-8">
      <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md uppercase tracking-widest animate-fade-in">
        Coach Holística & PNL
      </span>
      <h1 className="font-display-lg text-[40px] md:text-display-lg max-w-4xl mx-auto leading-tight">
        Transforma tu vida con <span className="text-primary italic">Libertad Económica y Emocional</span>
      </h1>
      <p className="font-body-lg text-body-lg text-muted-earth max-w-2xl mx-auto leading-relaxed">
        Descubre tu mejor versión a través de mentorías personalizadas, cursos Online de crecimiento personal y terapias Holísticas.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <a href="#cursos" className="w-full sm:w-auto bg-primary text-on-primary px-12 py-4 rounded-lg font-title-lg text-title-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center">
          Explorar
        </a>
      </div>
      <div className="pt-12 animate-float">
        <span className="material-symbols-outlined text-primary text-4xl">keyboard_double_arrow_down</span>
      </div>
    </div>
  </AnimatedSection>
);

const Counters = () => {
  const stats = [
    { value: "15+", label: "Años de Experiencia" },
    { value: "500+", label: "Vidas Transformadas" },
    { value: "20+", label: "Cursos Impartidos" }
  ];

  return (
    <AnimatedSection className="bg-cream-bg py-16">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-muted-earth/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2 py-6 md:py-0">
              <p className="font-headline-lg text-headline-lg text-primary">{stat.value}</p>
              <p className="font-label-md text-label-md text-muted-earth uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <div className="w-2 h-2 bg-secondary rotate-45"></div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const About = () => (
  <AnimatedSection className="py-section-gap" id="conocenos">
    <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-secondary"></div>
            <h2 className="font-headline-lg text-headline-lg text-charcoal-text">Conócenos</h2>
            <div className="h-[1px] w-12 bg-secondary"></div>
          </div>
          <div className="space-y-6">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Soy Rossana Altez, coaching holística dedicada a guiar personas hacia su transformación personal completa. Con más de 15 años de experiencia, combino técnicas ancestrales con metodologías modernas como programación neuro lingüística (PNL) y programas de crecimiento personal.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Mi enfoque integra el bienestar emocional, mental y espiritual, creando un espacio seguro donde puedes reconectar contigo mismo y descubrir tu verdadero potencial.
            </p>
          </div>
          <div className="flex items-center gap-2 text-primary font-label-md text-label-md">
            <span className="w-8 h-[1px] bg-primary"></span>
            Crecimiento • Transformación • Equilibrio
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="absolute -inset-4 bg-primary-fixed rounded-xl -z-10 rotate-3"></div>
          <img 
            alt="Rossana Altez" 
            className="w-full aspect-square object-cover rounded-lg shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida/AP1WRLt5Ci_YXXQoGKJ1yGRSPB0cOviEjMz-EZP69uvEAPst8IUwTXk5ImJAfnxSGLxficq5eTGxGtCXlOrCe9tWK0wJ22BUuwzA6WJEz6k3jIbwj7IvI7a602rEFuZFpAd_s4WFdRGhC5oSQIGiYhyf3s6-hcmEftBNI6NET0vWzi9iCGp-_dBM1MvThtMWSqq32ARCOO2A52HqJkk72nduJNI8Bq0ebR6IMA9YvBshGaQwCn81EAOrP9iQC4E" 
          />
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const Divider = () => (
  <div className="flex justify-center items-center gap-4 py-8">
    <div className="h-[1px] w-24 bg-muted-earth/20"></div>
    <div className="w-3 h-3 border border-secondary rotate-45 flex items-center justify-center">
      <div className="w-1 h-1 bg-secondary"></div>
    </div>
    <div className="h-[1px] w-24 bg-muted-earth/20"></div>
  </div>
);

const TestimonialCard = ({ name, quote, className = "" }: any) => (
  <div className={`bg-white p-card-padding rounded-lg shadow-[0_4px_24px_rgba(45,45,45,0.05)] border border-muted-earth/10 flex flex-col items-center text-center space-y-4 ${className}`}>
    <div className="flex gap-1 text-gold-accent">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      ))}
    </div>
    <h4 className="font-title-lg text-title-lg text-primary">{name}</h4>
    <p className="font-body-md text-body-md italic text-on-surface-variant leading-relaxed">
      "{quote}"
    </p>
  </div>
);

const Testimonials = () => {
  const allTestimonials = [
    {
      name: "Anahí Gonzáles",
      quote: "Conoci a Rossana en 2018, en uno de los momentos mas dificiles de mi adolecencia. Llego a mi vida como una luz en medio de la oscuridad, justo cuando mas necesitaba claridad y contención."
    },
    {
      name: "Jessica Tabeira",
      quote: "Comence con una apertura de registros akashicos, este gran paso hacia mi busqueda de respuesta. Fue una gran guía."
    },
    {
      name: "Stella Toledo",
      quote: "Cuando conoci a Rossana en 2017 me encontraba con el autoestima baja y sin confianza en mi misma, a través del acompañamiento como coaching pude crear la mejor version de mi."
    },
    {
      name: "Maria Lopez",
      quote: "Rossana tiene una calidez humana única. Su acompañamiento me permitió ver mis problemas desde otra perspectiva y encontrar la paz que tanto buscaba en mi vida diaria."
    },
    {
      name: "Carlos Rodriguez",
      quote: "Llegué buscando respuestas y encontré un camino de sanación profunda. Sus sesiones me ayudaron a reconectar con mi esencia y a vivir con más plenitud."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [allTestimonials.length]);

  const getPositionStyles = (index: number) => {
    if (index === currentIndex) {
      return "opacity-100 scale-100 md:scale-105 z-20 blur-none translate-x-0";
    }
    const prevIndex = (currentIndex - 1 + allTestimonials.length) % allTestimonials.length;
    const nextIndex = (currentIndex + 1) % allTestimonials.length;

    if (index === prevIndex) {
      return "opacity-40 scale-90 z-10 blur-[3px] -translate-x-[25%] md:-translate-x-[110%]";
    }
    if (index === nextIndex) {
      return "opacity-40 scale-90 z-10 blur-[3px] translate-x-[25%] md:translate-x-[110%]";
    }
    return "opacity-0 scale-75 z-0 hidden translate-x-0";
  };

  return (
    <AnimatedSection className="bg-surface-container-low py-section-gap overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter text-center space-y-12">
        <div className="space-y-2">
          <h2 className="font-headline-lg text-headline-lg text-charcoal-text">Testimonios</h2>
          <p className="font-body-md text-body-md text-muted-earth">Lo que dicen nuestros clientes</p>
        </div>
        
        <div className="relative h-[450px] md:h-[350px] flex items-center justify-center overflow-visible w-full max-w-5xl mx-auto py-8">
          {allTestimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`absolute w-[85%] md:w-full max-w-sm transition-all duration-1000 ease-in-out ${getPositionStyles(idx)}`}
            >
              <TestimonialCard name={t.name} quote={t.quote} />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          {allTestimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-primary' : 'w-2.5 bg-muted-earth/40'}`}
              aria-label={`Ir al testimonio ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const CourseCard = ({ title, description, image, link, isNew = false, soon = false }: any) => {
  if (soon) {
    return (
      <div className="group bg-surface-container-low p-card-padding rounded-lg border border-dashed border-muted-earth/30 relative overflow-hidden flex flex-col">
        <div className="absolute top-0 right-0 bg-muted-earth text-white px-4 py-1.5 rounded-bl-lg font-label-md text-[12px] z-10">En Preparación</div>
        <h4 className="font-title-lg text-title-lg text-muted-earth mb-4">{title}</h4>
        <p className="font-body-md text-body-md text-on-surface-variant/60 mb-8 flex-grow">
          {description}
        </p>
        <div className="space-y-4">
          <button className="w-full bg-muted-earth/20 text-muted-earth py-3 rounded-lg font-label-md text-label-md cursor-not-allowed" disabled>
            Próximamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white p-card-padding rounded-lg shadow-[0_4px_24px_rgba(45,45,45,0.05)] relative overflow-hidden flex flex-col">
      {isNew && (
        <div className="absolute top-0 right-0 bg-secondary text-white px-6 py-2 rounded-bl-lg font-label-md text-[12px] md:text-label-md z-10">¡Nuevo!</div>
      )}
      {image && (
        <div className="mb-6 h-48 w-full bg-surface-container overflow-hidden rounded-lg">
          <img 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            alt={title} 
            src={image} 
          />
        </div>
      )}
      <h4 className="font-title-lg text-title-lg text-charcoal-text mb-4">{title}</h4>
      <p className={`font-body-md text-body-md text-on-surface-variant mb-8 flex-grow ${!image ? 'line-clamp-4' : ''}`}>
        {description}
      </p>
      <div className="space-y-4">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="w-full bg-primary text-on-primary py-3 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all flex items-center justify-center gap-2">
            {image ? 'Saber más del curso' : 'Saber más'} {image && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
          </a>
        ) : (
          <button className="w-full bg-primary text-on-primary py-3 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all flex items-center justify-center gap-2">
            {image ? 'Saber más del curso' : 'Saber más'} {image && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
          </button>
        )}
        {image && (
          <button className="w-full text-muted-earth font-label-md text-label-md hover:text-primary transition-colors">
            Consultar detalles
          </button>
        )}
      </div>
    </div>
  );
};

const Courses = () => (
  <AnimatedSection className="py-section-gap" id="cursos">
    <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter space-y-20">
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <h2 className="font-headline-lg text-headline-lg text-charcoal-text">Nuestros Cursos</h2>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Hacer un curso de desarrollo personal o profesional proporciona herramientas para mejorar habilidades, aumentar la empleabilidad, fomentar la autoconfianza y establecer metas claras.
        </p>
      </div>

      <div className="space-y-10">
        <div className="flex items-center justify-between border-b border-muted-earth/10 pb-4">
          <h3 className="font-headline-md text-headline-md text-primary">Cursos Holísticos</h3>
          <span className="font-label-md text-label-md text-muted-earth">2 Cursos disponibles</span>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <CourseCard 
            isNew
            title="Estres y ansiedad"
            description="Un curso o taller de estrés y ansiedad proporciona herramientas prácticas para manejar y reducir estos síntomas, mejora la comprensión de sus causas y fomenta el autocuidado."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAEO20Jn8wlvl9a-CNVIdkBY1H56pwmTNyfJLkuVsUvx9npFSneQkmDwk7D4VEE1vJziUuQo03odEdA4GI0EEifR_-FPN2_KRB_XW9D_tEKkSRBygbjD3O4mG84Gcl85Iuw_V7uW_g5d3F9_xqpw6V9TnI3ybMzt2KIrnDRj-ceZILSz8NGoQjAo8Tonn6EL9KsVK5IA3SQQlMYMHGK3QGTW-g9eENrAvLJuJDfzXkyXxuFQPi80_9G"
            link="https://hotmart.com/es/marketplace/productos/hagsxd-estres-y-ansiedad-du2fh/B103798851F?sck=HOTMART_PRODUCT_PAGE"
          />
          <CourseCard 
            isNew
            title="Constelaciones Familiares Sanar las Raices"
            description="Las Constelaciones Familiares ayudan a sanar patrones y conflictos transmitidos generacionalmente, restableciendo el orden y el equilibrio en el sistema familiar."
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAi5rMNbI2zyj_PhItMiQ-wkntUmByf6aSlxiTRT_SxkcjrKfziNhAu7hNEHUjVbBsT6GJctShAg80k1estRnWCw5t2RG6owOIzuZwuCKS9XVpqc3XFCPycYjAa8FwIXWCv59ChWyR14th8h4nBawNai242BcKvRs-dYYpr2YJAMF-iM1KFWKgn0yppE22gycNt414X83J8Nqoa9ExzJ7AlMVFIVqqL_7SAU6S61EoHZBml_vKsstMl"
            link="https://hotmart.com/es/marketplace/productos/constelaciones-familiares-sanar-las-raices/K104067889G?sck=HOTMART_PRODUCT_PAGE"
          />
        </div>
      </div>

      <div className="space-y-10">
        <div className="flex items-center justify-between border-b border-muted-earth/10 pb-4">
          <h3 className="font-headline-md text-headline-md text-primary">Cursos de Crecimiento Personal</h3>
          <span className="font-label-md text-label-md text-muted-earth">3 Cursos disponibles</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <CourseCard 
            isNew
            title="Programación Neuro Lingüística (PNL)"
            description="Conjunto de técnicas que estudian la conexión entre el lenguaje, el cerebro y el comportamiento, permitiendo a las personas reprogramar sus patrones."
          />
          <CourseCard 
            isNew
            title="Desarrollo Personal y Profesional"
            description="Proceso continuo de adquirir habilidades, conocimientos y experiencias que mejoran la calidad de vida y potencian el rendimiento laboral."
          />
          <CourseCard 
            soon
            title="Autoestima"
            description="La autoestima es la percepción y valoración que una persona tiene de sí misma, que influye en su confianza y bienestar emocional."
          />
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-muted-earth/20 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center py-4 md:py-6 text-left focus:outline-none group"
      >
        <span className="font-title-lg text-title-lg text-charcoal-text pr-4 group-hover:text-primary transition-colors">{question}</span>
        <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "¿Qué es una sesión de coaching holístico?",
      answer: "Es un espacio de acompañamiento donde trabajamos no solo tus metas mentales o profesionales, sino también tus emociones, tu energía y tu conexión espiritual. Utilizamos herramientas como la PNL, lectura de registros, y sanación energética para un abordaje completo."
    },
    {
      question: "¿Necesito experiencia previa para tomar los cursos?",
      answer: "No, la mayoría de nuestros cursos están diseñados tanto para principiantes que buscan autoconocimiento, como para personas que ya tienen un camino recorrido y desean profundizar sus herramientas terapéuticas."
    },
    {
      question: "¿Las sesiones son presenciales o virtuales?",
      answer: "Ofrecemos ambas modalidades. Puedes atender de forma virtual desde cualquier parte del mundo o presencialmente en nuestro espacio en Punta del Este, Uruguay."
    },
    {
      question: "¿Cómo sé qué curso o terapia es ideal para mí?",
      answer: "Si tienes dudas, puedes contactarme directamente por WhatsApp o agendar una charla breve. Analizaremos tu situación actual y te recomendaré la herramienta que mejor resuene con tu proceso personal."
    }
  ];

  return (
    <AnimatedSection className="py-section-gap bg-surface-container-lowest" id="faq">
      <div className="max-w-[800px] mx-auto px-margin-mobile md:px-gutter">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-charcoal-text">Preguntas Frecuentes</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Resuelve tus dudas sobre las mentorías, cursos y el proceso de transformación.
          </p>
        </div>
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_24px_rgba(45,45,45,0.05)]">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const Contact = () => (
  <AnimatedSection className="py-section-gap bg-cream-bg" id="contacto">
    <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter">
      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-charcoal-text">Inicia tu proceso de transformación</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              ¿Tienes alguna duda o quieres agendar una sesión? Estoy aquí para escucharte y acompañarte en tu camino hacia el bienestar.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-muted-earth">Email</p>
                <a className="font-title-lg text-title-lg text-charcoal-text hover:text-primary transition-colors" href="mailto:roussealtez74@gmail.com">roussealtez74@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <span className="material-symbols-outlined text-primary">phone_iphone</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-muted-earth">WhatsApp</p>
                <a className="font-title-lg text-title-lg text-charcoal-text hover:text-primary transition-colors" href="tel:+59894402452">+598 94 402 452</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <span className="material-symbols-outlined text-primary">location_on</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-muted-earth">Ubicación</p>
                <p className="font-title-lg text-title-lg text-charcoal-text">Punta del Este, Uruguay</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-card-padding rounded-lg shadow-xl border border-muted-earth/10">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-muted-earth">Nombre</label>
                <input className="w-full border-0 border-b border-muted-earth/30 focus:border-primary focus:ring-0 px-0 py-2 bg-transparent transition-all outline-none" placeholder="Tu nombre" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-muted-earth">Email</label>
                <input className="w-full border-0 border-b border-muted-earth/30 focus:border-primary focus:ring-0 px-0 py-2 bg-transparent transition-all outline-none" placeholder="Tu correo" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-muted-earth">Mensaje</label>
              <textarea className="w-full border-0 border-b border-muted-earth/30 focus:border-primary focus:ring-0 px-0 py-2 bg-transparent transition-all outline-none" placeholder="¿En qué puedo ayudarte?" rows={4}></textarea>
            </div>
            <a href="tel:+59894402452" className="w-full bg-primary text-on-primary py-4 rounded-lg font-title-lg text-title-lg hover:opacity-90 transition-all shadow-md block text-center">
              Enviar mensaje
            </a>
          </form>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const Footer = () => (
  <footer className="bg-inverse-surface text-surface py-section-gap border-t border-muted-earth/20">
    <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-gutter flex flex-col items-center text-center space-y-12">
      <div className="grid md:grid-cols-4 gap-12 text-left w-full">
        <div className="md:col-span-1 space-y-6">
          <div className="flex items-center">
            <img alt="Logo" className="h-24 w-24 md:h-36 md:w-36 brightness-0 invert" src="https://lh3.googleusercontent.com/aida/AP1WRLsk5ZM5MO-0faWyMRwqzp7CgCUUSMbm9rPc8Y-wnytnWIqsFxMIcIZ6JHLL82RNrpsYVWvYWEf8hR1rkOOTeSzzib2xKH0ebmvUrXFvuaORrbvo-8j4wxOFhEtzd1LGNq9fnkvYtyUtP8NxZHJgiwy1k1i2a2picrfX5RYKbrXGLRDeZgFqBxVKQS7qK1GD57_MFTf5BvEJO_-yrX9PHmp2o6--jkdMoo0TRKqoPWKIZYaiAv_AgNQp" />
          </div>
          <p className="font-body-md text-body-md text-surface-variant/80">
            Guiando tu transformación personal con sabiduría holística y herramientas modernas.
          </p>
        </div>
        <div className="space-y-4">
          <h5 className="font-title-lg text-title-lg text-surface">Enlaces Rápidos</h5>
          <ul className="space-y-2 text-surface-variant/70 font-body-md text-body-md">
            <li><a className="hover:text-gold-accent transition-colors" href="#cursos">Cursos</a></li>
            <li><a className="hover:text-gold-accent transition-colors" href="#conocenos">Sobre Mí</a></li>
            <li><a className="hover:text-gold-accent transition-colors" href="#contacto">Contacto</a></li>
            <li><a className="hover:text-gold-accent transition-colors" href="#">Newsletter</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="font-title-lg text-title-lg text-surface">Legal</h5>
          <ul className="space-y-2 text-surface-variant/70 font-body-md text-body-md">
            <li><a className="hover:text-gold-accent transition-colors" href="#">Privacidad</a></li>
            <li><a className="hover:text-gold-accent transition-colors" href="#">Términos</a></li>
            <li><a className="hover:text-gold-accent transition-colors" href="#">Preguntas Frecuentes</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-title-lg text-title-lg text-surface">Redes Sociales</h5>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-surface-variant/20 flex items-center justify-center hover:bg-primary transition-all group" href="https://www.instagram.com/mroussal" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-surface group-hover:scale-110 transition-transform" />
            </a>
            <a className="w-10 h-10 rounded-full border border-surface-variant/20 flex items-center justify-center hover:bg-primary transition-all group" href="https://www.facebook.com/maria.altez.56?mibextid=wwXIfr&rdid=qV0XliLMP2dHJc1Q&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1By8eZD9c4%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 text-surface group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-surface-variant/10"></div>
      <p className="font-label-md text-label-md text-surface-variant/60">
        © 2024 Rossana Altez. Coaching & Mentorías Holísticas. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

// ---------------------------------------------------------
// 3. COMPONENTE PRINCIPAL (PAGE)
// ---------------------------------------------------------

export default function Home() {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Header />
      <main>
        <Hero />
        <Counters />
        <About />
        <Divider />
        <Testimonials />
        <Courses />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
