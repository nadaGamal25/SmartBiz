import { getTranslations, setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n/config';

export default async function HowItWorks({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'how' });

  const steps = [
    { num: '01', titleKey: 'step1_title', descKey: 'step1_desc' },
    { num: '02', titleKey: 'step2_title', descKey: 'step2_desc' },
    { num: '03', titleKey: 'step3_title', descKey: 'step3_desc' },
  ] as const;

  return (
    <section className="bg-[#0A0F1E] py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full mb-4">
            {t('badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">{t('title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 start-1/4 end-1/4 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

          {steps.map((step) => (
            <div key={step.num} className="relative text-center group">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-600/30 transition-colors">
                <span className="text-2xl font-bold gradient-text">{step.num}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{t(step.titleKey)}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{t(step.descKey)}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}