import { getTranslations, setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n/config';

const avatarColors = ['bg-violet-100 text-violet-700', 'bg-indigo-100 text-indigo-700', 'bg-blue-100 text-blue-700'];

export default async function Testimonials({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'testimonials' });

  const items = [
    { q: 't1_quote', name: 't1_name', role: 't1_role', initials: 'SA' },
    { q: 't2_quote', name: 't2_name', role: 't2_role', initials: 'AM' },
    { q: 't3_quote', name: 't3_name', role: 't3_role', initials: 'LH' },
  ] as const;

  return (
    <section className="bg-gray-50 py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-4">
            {t('badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{t('title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={item.name} className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col gap-6">
              <div className="text-4xl text-indigo-200 font-serif leading-none">"</div>
              <p className="text-gray-600 leading-relaxed text-sm flex-1">{t(item.q)}</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${avatarColors[i]}`}>
                  {item.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t(item.name)}</div>
                  <div className="text-xs text-gray-400">{t(item.role)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}