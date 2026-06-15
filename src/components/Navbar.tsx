import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { LocaleSwitcher } from './LocaleSwitcher';
import { type Locale } from '@/i18n/config';

export default async function Navbar({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'nav' });

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto ">
        <nav className="bg-[#0A0F1E] px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-lg tracking-tight">
            Smart<span className="gradient-text">Biz</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {(['home', 'features', 'pricing'] as const).map((key) => (
              <li key={key}>
                <Link
                  href={key === 'home' ? '/' : `/#${key}`}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <LocaleSwitcher />
           
          </div>
        </nav>
      </div>
    </header>
  );
}