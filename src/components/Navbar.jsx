import { useEffect, useState } from "react";
import { ShieldIcon, MenuIcon, CloseIcon } from "./ui/icons";
import { useTranslation } from "react-i18next";       
import LanguageSwitcher from "./ui/LanguageSwitcher"; 



export default function Navbar() {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen((v) => !v);

    const { t } = useTranslation(); 

   
    const links = [
        { label: t('nav.home'), href: "#inicio" },
        { label: t('nav.about'), href: "#sobre" },
        { label: t('nav.skills'), href: "#skills" },
        { label: t('nav.projects'), href: "#proyectos" },
        { label: t('nav.contact'), href: "#contacto" },
    ];

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
    }, [open]);


    return (
        <header className="sticky top-0 z-50 border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
                <a href="#inicio" className="flex items-center gap-2">
                    <ShieldIcon className="w-5 h-5 text-emerald-400" />
                    <span className="font-semibold">Hugo Enrique Acosta Sanchez</span>
                </a>


                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-2">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} className="px-3 py-2 rounded-lg text-sm hover:bg-neutral-800 transition">
                            {l.label}
                        </a>
                    ))}

                    
                    <div className="pl-4">
                        <LanguageSwitcher />
                    </div>
                </nav>


                
                <button
                    onClick={toggle}
                    className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-neutral-800 transition"
                    aria-label={t('nav.openMenu')}
                    aria-expanded={open}
                >
                    {open ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
            </div>


            
            <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
                <nav className="px-4 pb-4 pt-1 space-y-1 bg-neutral-950/95">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-neutral-800">
                            {l.label}
                        </a>
                    ))}

                    <div className="pt-3 pb-1 px-3">
                        <LanguageSwitcher />
                    </div>
                </nav>
            </div>
        </header>
    );
}