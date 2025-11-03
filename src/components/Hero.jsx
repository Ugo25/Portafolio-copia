import { useTranslation, Trans } from 'react-i18next'; 
import fotoPerfil from "../assets/foto-perfil.jpg";
import Badge from "./ui/Badge";
import IconLink from "./ui/IconLink";
import { GitHubIcon, GitLabIcon, MailIcon } from "./ui/icons";

export default function Hero() {
    const { t } = useTranslation(); 

    const skillBadges = t('hero.skillBadges', { returnObjects: true });

    return (
        <section id="inicio" className="relative flex items-center justify-center min-h-[90vh] scroll-mt-24">
            <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(16,185,129,0.12),transparent),radial-gradient(500px_200px_at_90%_0%,rgba(16,185,129,0.08),transparent)]" />

            <div className="relative mx-auto max-w-6xl px-4 py-10 md:py-20 grid md:grid-cols-2 gap-10 items-center">
                {/* Texto */}
                <div className="space-y-5">
                   
                    <h1 className="reveal text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight" style={{ transitionDelay: "0ms" }}>
                        {t('hero.line1')} {t('hero.line2')} {t('hero.line3')}
                        <span className="block mt-2">
                            <span className="text-emerald-400">{t('hero.line4')} → </span>
                            <span className="text-red-500">{t('hero.line5')}</span>
                        </span>
                    </h1>

                    
                    <p className="reveal mt-0 text-neutral-300 max-w-prose text-base md:text-lg" style={{ transitionDelay: "120ms" }}>
                        <Trans
                            i18nKey="hero.description"
                            components={{
                                1: <b />, 2: <b />, 3: <b />, 4: <b />, 5: <b />
                            }}
                        />
                    </p>

                    
                    <div className="reveal mt-0 flex flex-col sm:flex-row gap-3" style={{ transitionDelay: "240ms" }}>
                        <a href="#proyectos" className="inline-flex justify-center rounded-xl border border-emerald-500/60 text-emerald-300 hover:bg-emerald-500/10 px-4 py-2">
                            {t('hero.buttonProjects')}
                        </a>
                        <a href="#contacto" className="inline-flex justify-center rounded-xl border border-neutral-700 hover:bg-neutral-800 px-4 py-2">
                            {t('hero.buttonContact')}
                        </a>
                    </div>

                    
                    <div className="reveal mt-0 flex gap-4 text-neutral-300" style={{ transitionDelay: "360ms" }}>
                        <IconLink href="https://github.com/Ugo25" label={t('hero.githubLabel')}><GitHubIcon className="w-6 h-6" /></IconLink>
                        <IconLink href="https://gitlab.com/Ugo25" label={t('hero.gitlabLabel')}><GitLabIcon className="w-6 h-6" /></IconLink>
                        <IconLink href="mailto:hugoacosta7911@gmail.com" label={t('hero.emailLabel')}><MailIcon className="w-6 h-6" /></IconLink>
                    </div>
                </div>

                
                <div className="md:order-none order-last flex flex-col items-center justify-center gap-6 text-center">
                
                    <div className="relative animate-fade-up delay-150 group inline-block">
                        <img
                            src={fotoPerfil}
                            alt="Hugo Acosta"
                            className="protected-img relative w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-neutral-800 shadow-lg shadow-emerald-500/10 group-hover:shadow-emerald-500/30 transition duration-500 select-none"
                        />
                    </div>

                    <a 
                        href="/Currículum - Desarrollador Web.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="reveal inline-flex justify-center rounded-xl border border-neutral-700 hover:bg-neutral-800 px-4 py-2 w-full max-w-[200px]"
                        style={{ transitionDelay: "400ms" }}
                    >
                        {t('hero.buttonCV')}
                    </a>
                    <div className="relative w-full max-w-[540px] animate-fade-up delay-300">
                        <div className="absolute -inset-1 bg-emerald-500/20 blur-2xl rounded-3xl" />
                        <div className="relative bg-neutral-900 border border-neutral-800 rounded-3xl p-5 sm:p-6 shadow-xl">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                
                                {skillBadges.map((b, i) => ( 
                                    <Badge key={i} label={b} />
                                ))}

                            </div>
                            
                            <div className="mt-5 text-xs sm:text-sm text-neutral-400">
                                {t('hero.skillsNote')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}