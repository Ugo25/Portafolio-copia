import { useTranslation } from 'react-i18next';
import SkillCard from "./ui/SkillCard.jsx";

export default function Skills() {
    const { t } = useTranslation();

    //textos
    const skillsTitle = t('skills.title');
    const skillsSubtitle = t('skills.subtitle');
    const advancedTitle = t('skills.advanced.title');
    const intermediateTitle = t('skills.intermediate.title');
    const inProgressTitle = t('skills.inProgress.title');

    //listas
    const advancedList = t('skills.advanced.items', { returnObjects: true });
    const intermediateList = t('skills.intermediate.items', { returnObjects: true });
    const inProgressList = t('skills.inProgress.items', { returnObjects: true });

    return (
        <section id="skills" className="mx-auto max-w-6xl px-4 py-12 md:py-16 scroll-mt-24">
            <h2 className="reveal text-xl md:text-2xl font-bold">{skillsTitle}</h2>
            <p className="reveal mt-3 text-neutral-300 text-base md:text-lg" style={{ transitionDelay: "100ms" }}>{skillsSubtitle}</p>

            {/* Avanzado */}
            <div className="reveal mt-8" style={{ transitionDelay: "200ms" }}>

                <h3 className="text-lg font-semibold text-emerald-400 mb-3">{advancedTitle}</h3>
                
                <div className="grid grid-cols-1 gap-4 w-full md:w-1/2">
                    {advancedList.map((name, i) => (
                        <SkillCard key={i} name={name} level={advancedTitle} />
                    ))}
                </div>
            </div>

            {/* Intermedio */}
            <div className="reveal mt-10" style={{ transitionDelay: "300ms" }}>
            
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">{intermediateTitle}</h3>
                
                <div className="grid grid-cols-1 gap-4 w-full md:w-1/2">
                    {intermediateList.map((name, i) => (
                        <SkillCard key={i} name={name} level={intermediateTitle} />
                    ))}
                </div>
            </div>

            {/* En curso */}
            <div className="reveal mt-10" style={{ transitionDelay: "400ms" }}>
                
                <h3 className="text-lg font-semibold text-blue-400 mb-3">{inProgressTitle}</h3>
                
                <div className="grid grid-cols-1 gap-4 w-full md:w-1/2">
                    {inProgressList.map((name, i) => (
                        <SkillCard key={i} name={name} level={inProgressTitle} />
                    ))}
                </div>
            </div>
        </section>
    );
}