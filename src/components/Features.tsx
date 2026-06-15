import { getTranslations, setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n/config';

const icons = ['📊', '🤝', '🔒', '⚡', '🌐', '🔌'];

const cards = [
  { t: 'card1', col: 'md:col-span-2' },
  { t: 'card2', col: '' },
  { t: 'card3', col: '' },
  { t: 'card4', col: '' },
  { t: 'card5', col: 'md:col-span-2' },
  { t: 'card6', col: '' },
] as const;

export default async function Features({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'features' });

  return (
    <section id="features" className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-4">
            {t('badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <div
              key={card.t}
              className={` group relative bg-gray-50 hover:bg-indigo-50 border border-gray-100 hover:border-indigo-200 rounded-2xl p-8 transition-all duration-300 cursor-default overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-indigo-600/0 group-hover:from-indigo-600/5 group-hover:to-violet-600/5 transition-all duration-300 rounded-2xl" />
              <div className="relative">
                <span className="text-3xl mb-5 block">{icons[i]}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t(`${card.t}_title` as any)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`${card.t}_desc` as any)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}