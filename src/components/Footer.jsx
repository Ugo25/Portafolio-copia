import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 py-8 text-center text-neutral-500 text-xs md:text-sm">
      {t('footer.copyright', { year: currentYear })}
    </footer>
  );
}