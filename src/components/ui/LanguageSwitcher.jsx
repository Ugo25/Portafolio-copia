// src/components/ui/LanguageSwitcher.jsx (Versión corregida)

import { useTranslation } from "react-i18next";

// Lista de idiomas
const languages = [
    { code: "es", name: "ES" },
    { code: "en", name: "EN" },
    { code: "fr", name: "FR" },
];

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex gap-1">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    // Estilos para resaltar el idioma activo
                    className={`
            px-2.5 py-1.5 rounded-md text-xs font-bold
            ${i18n.language.startsWith(lang.code)
                            ? 'bg-emerald-600 text-white'
                            : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                        }
            transition-colors
          `}
                >
                    {lang.name}
                </button>
            ))}
        </div>
    );
}