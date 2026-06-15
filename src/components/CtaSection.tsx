import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { type Locale } from '@/i18n/config';

export default async function CtaSection({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'cta_section' });

  return (
    <section className="bg-[#0A0F1E] py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('title')}</h2>
        <p className="text-white/50 text-lg mb-10">{t('subtitle')}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#pricing"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-indigo-900/50"
          >
            {t('cta_primary')}
          </Link>
          <Link
            href="/#contact"
            className="border border-white/20 hover:border-white/40 text-white/80 hover:text-white px-8 py-3.5 rounded-full font-medium transition-all"
          >
            {t('cta_secondary')}
          </Link>
        </div>
      </div>
    </section>
  );
}