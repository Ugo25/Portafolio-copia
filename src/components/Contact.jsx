import { useTranslation } from 'react-i18next';
import { MailIcon, GitHubIcon, GitLabIcon, LinkedInIcon } from "./ui/icons";


export default function Contact() {
    const { t } = useTranslation(); 

    return (
        <section id="contacto" className="mx-auto max-w-6xl px-4 py-12 md:py-16 scroll-mt-24">
           
            <h2 className="reveal text-xl md:text-2xl font-bold">{t('contact.title')}</h2>
            <p className="reveal mt-3 text-neutral-300">{t('contact.subtitle')}</p>


            <div className="reveal mt-6 flex flex-col sm:flex-row gap-3 text-neutral-300">
                <a href="mailto:hugoacosta7911@gmail.com" className="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 flex items-center gap-2 justify-center">
                    <MailIcon className="w-4 h-4" /> {t('contact.email')}
                </a>
                <a href="https://github.com/Ugo25" className="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 flex items-center gap-2 justify-center">
                    <GitHubIcon className="w-4 h-4" /> {t('contact.github')}
                </a>
                <a href="https://gitlab.com/Ugo25" className="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 flex items-center gap-2 justify-center">
                    <GitLabIcon className="w-4 h-4" /> {t('contact.gitlab')}
                </a>
                <a href="https://www.linkedin.com/in/hugo-acosta-a9b5aa395" className="px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 flex items-center gap-2 justify-center">
                    <LinkedInIcon className="w-4 h-4" /> {t('contact.linkedin')}
                </a>
            </div>
        </section>
    );
}