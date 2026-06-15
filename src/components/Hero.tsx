import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { type Locale } from '@/i18n/config';

export default async function Hero({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'hero' });

  const stats = [
    { num: t('stat1_num'), label: t('stat1_label') },
    { num: t('stat2_num'), label: t('stat2_label') },
    { num: t('stat3_num'), label: t('stat3_label') },
  ];

  return (
    <section className="relative min-h-screen bg-[#0A0F1E] flex items-center overflow-hidden">

      {/* Gradient orbs */}
      <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 end-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          {t('badge')}
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          {t('title_1')}
          <br />
          <span className="gradient-text">{t('title_2')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('subtitle')}
        </p>

        {/* CTAs */}
        {/* <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <Link
            href="/#pricing"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-indigo-900/50 hover:shadow-indigo-900/70 hover:-translate-y-0.5"
          >
            {t('cta_primary')}
          </Link>
          <Link
            href="/#demo"
            className="flex items-center gap-3 text-white/80 hover:text-white border border-white/10 hover:border-white/30 px-8 py-3.5 rounded-full font-medium transition-all"
          >
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">▶</span>
            {t('cta_secondary')}
          </Link>
        </div> */}

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.num}</div>
              <div className="text-sm text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}