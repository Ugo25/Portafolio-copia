// src/App.jsx

import { useEffect } from "react";
import { useTranslation } from 'react-i18next'; // Importa esto

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Mueve la variable 'io' fuera del componente.
let io;

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    
    // 1. Desconecta el observador ANTERIOR si existe
    if (io) {
      io.disconnect();
    }

    // 2. Encuentra TODOS los elementos y quítales 'show'
    // Esto los resetea a su estado "oculto"
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => {
      el.classList.remove("show");
    });

    // 3. Crea el NUEVO observador
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // 4. LA SOLUCIÓN: Espera al "siguiente tick" del navegador
    // antes de empezar a observar.
    const timer = setTimeout(() => {
      els.forEach((el) => io.observe(el));
    }, 50); // 0ms es todo lo que necesitas.

    // 5. Limpieza (se ejecuta cuando el idioma cambia de nuevo)
    return () => {
      clearTimeout(timer);
      if (io) {
        io.disconnect();
      }
    };
    
  }, [i18n.language]); // Se ejecuta CADA vez que el idioma cambia

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}