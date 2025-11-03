import { useTranslation } from "react-i18next"; 
import { GlobeIcon } from "./ui/icons";

export default function Projects() {
    const { t } = useTranslation();
    
    // --- MODIFICACIÓN AQUÍ ---
    // Esto previene el error si 'projects.items' no es un array 
    // (relacionado a tu problema de i18n)
    const projectsList = Array.isArray(t('projects.items', { returnObjects: true }))
        ? t('projects.items', { returnObjects: true })
        : [];

    return (
        <section id="proyectos" className="mx-auto max-w-6xl px-4 py-12 md:py-16 scroll-mt-24">
            <h2 className="text-xl md:text-2xl font-bold">{t('projects.title')}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {projectsList.map((p, i) => ( 
                    <a
                        key={i} 
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        // --- MODIFICACIONES AQUÍ ---
                        // 1. Añade 'relative' y 'overflow-hidden'
                        className="relative overflow-hidden reveal group rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 hover:border-emerald-600 transition shadow-sm block"
                        style={{ transitionDelay: `${i * 120}ms` }}
                    >
                        {/* --- 2. Envuelve tu contenido actual --- */}
                        {/* Hacemos que se ponga borroso y opaco en hover */}
                        <div className="transition-all duration-300 group-hover:opacity-10 group-hover:blur-sm">
                            <div className="flex items-center gap-2 text-neutral-300 text-sm">
                                <GlobeIcon className="w-4 h-4" />
                                <span>{p.tags}</span>
                            </div>
                            <h3 className="mt-2 text-lg md:text-xl font-semibold group-hover:text-emerald-300">{p.title}</h3>
                            <p className="mt-2 text-neutral-400 text-sm">{p.desc}</p>
                        </div>

                        {/* --- 3. Añade la vista previa oculta --- */}
                        {/* Este div es absoluto, invisible por defecto, y aparece en hover */}
                        <div className="absolute top-0 left-0 w-full h-full
                                        opacity-0 group-hover:opacity-100 
                                        transition-all duration-300">
                            
                            {/* Asegúrate de tener una URL para la preview en tu JSON.
                              Ej: p.previewGif o p.previewImage 
                            */}
                            <img 
                                src={p.previewGif} // O la propiedad que tengas
                                alt={`Vista previa de ${p.title}`}
                                className="w-full h-full object-cover rounded-lg" 
                            />
                        </div>
                    </a>
                ))}
            </div>
     </section>
    );
}