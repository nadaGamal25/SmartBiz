import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { type Locale } from '@/i18n/config';

export default async function Pricing({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'pricing' });

  const plans = [
    {
      name: t('plan1_name'), price: t('plan1_price'), period: t('plan1_period'),
      desc: t('plan1_desc'), featured: false,
      features: [t('feature_users_1'), t('feature_analytics'), t('feature_support'), t('feature_rtl')],
      cta: t('cta'), href: '/#contact',
    },
    {
      name: t('plan2_name'), price: t('plan2_price'), period: t('plan2_period'),
      desc: t('plan2_desc'), featured: true, badge: t('plan2_badge'),
      features: [t('feature_users_2'), t('feature_analytics_pro'), t('feature_support_pro'), t('feature_rtl')],
      cta: t('cta'), href: '/#contact',
    },
    {
      name: t('plan3_name'), price: t('plan3_price'), period: t('plan3_period'),
      desc: t('plan3_desc'), featured: false,
      features: [t('feature_users_3'), t('feature_analytics_pro'), t('feature_sso'), t('feature_sla')],
      cta: t('contact_sales'), href: '/#contact',
    },
  ];

  return (
    <section id="pricing" className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-4">
            {t('badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{t('title')}</h2>
          <p className="text-gray-500">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col gap-6 ${
                plan.featured
                  ? 'bg-[#0A0F1E] text-white border-2 border-indigo-500 shadow-2xl shadow-indigo-900/30 scale-105'
                  : 'bg-gray-50 border border-gray-100'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 start-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                  {(plan as any).badge}
                </span>
              )}

              <div>
                <div className={`text-sm font-semibold mb-1 ${plan.featured ? 'text-indigo-300' : 'text-gray-500'}`}>
                  {plan.name}
                </div>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-extrabold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-1 ${plan.featured ? 'text-white/50' : 'text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.featured ? 'text-white/50' : 'text-gray-400'}`}>{plan.desc}</p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className={`text-base ${plan.featured ? 'text-indigo-400' : 'text-indigo-500'}`}>✓</span>
                    <span className={plan.featured ? 'text-white/70' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`text-center py-3 rounded-full font-semibold text-sm transition-all ${
                  plan.featured
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                    : 'border border-gray-200 text-gray-700 hover:border-indigo-300 hover:text-indigo-600'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}