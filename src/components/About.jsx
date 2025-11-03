import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    const cards = t('about.cards', { returnObjects: true });

    return (
        <section id="sobre" className="mx-auto max-w-6xl px-4 py-12 md:py-16 scroll-mt-24">
            <h2 className="reveal text-xl md:text-2xl font-bold" style={{ transitionDelay: "0ms" }}>
                {t('about.title')}
            </h2>

            <p className="reveal mt-3 md:mt-4 text-neutral-300 max-w-3xl text-base md:text-lg" style={{ transitionDelay: "120ms" }}>
                {t('about.description')}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {cards.map((card, i) => (
                    <div key={i} className="reveal rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4" style={{ transitionDelay: `${200 + i * 120}ms` }}>
                        <div className="text-sm font-semibold">{card.title}</div>
                        <div className="text-xs text-neutral-400 mt-1">{card.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}