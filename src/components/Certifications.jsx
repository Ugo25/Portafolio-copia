import { useTranslation } from 'react-i18next';
import badgeSwitching from "../assets/badges/CCNA.png";
import badgeIntro from "../assets/badges/Introredes.png";
import badgeCareer from "../assets/badges/carreraentecnico.png";
import badgeLearnathon from "../assets/badges/netgames.png";

export default function Certifications() {
  const { t } = useTranslation();


  const translatedItems = t('certifications.items', { returnObjects: true });


  const staticItems = [
    {
      img: badgeSwitching,
      url: "https://www.credly.com/badges/07a42402-760d-4310-b4ea-39a0354d6169/public_url",
    },
    {
      img: badgeIntro,
      url: "https://www.credly.com/badges/856b0349-bbff-4697-83e9-a33d35cebf56/public_url",
    },
    {
      img: badgeCareer,
      url: "https://www.credly.com/badges/62802231-51ee-4ffc-8d02-e8432af3ccb9/public_url",
    },
    {
      img: badgeLearnathon,
      url: "https://www.credly.com/badges/5d386eca-b7d5-488d-b5d3-a76bc1bbc02d/public_url",
    },
  ];

  return (
    <section id="certificaciones" className="mx-auto max-w-6xl px-4 py-12 md:py-16 scroll-mt-24">
    
      <h2 className="reveal text-xl md:text-2xl font-bold text-center md:text-left">{t('certifications.title')}</h2>
      <p className="reveal mt-3 text-neutral-300 text-sm md:text-base text-center md:text-left" style={{ transitionDelay: `100ms` }}>{t('certifications.subtitle')}</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        
  
        {translatedItems.map((item, i) => (
          <a
            key={i} 
            href={staticItems[i].url} 
            target="_blank"
            rel="noreferrer"
            className="reveal group rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 hover:border-emerald-600 transition shadow-sm w-full max-w-[230px]"
            style={{ transitionDelay: `${200 + i * 100}ms` }} 
          >
            <img 
              src={staticItems[i].img} 
              alt={item.title} 
              className="w-28 h-28 mx-auto object-contain drop-shadow-md group-hover:scale-[1.05] transition" 
            />
            <div className="mt-3 text-center">
              
              <div className="text-sm font-semibold text-neutral-100 line-clamp-2">{item.title}</div>
              <div className="text-xs text-neutral-400 mt-1">{item.issuer}</div>
              <div className="text-xs text-neutral-500">{item.date}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}