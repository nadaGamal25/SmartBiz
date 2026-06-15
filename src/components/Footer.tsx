import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { type Locale } from '@/i18n/config';

export default async function Footer({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'footer' });

  const links = [
    { heading: t('product'), items: [{ label: t('features'), href: '/#features' }, { label: t('pricing'), href: '/#pricing' }, { label: t('changelog'), href: '#' }] },
    { heading: t('company'), items: [{ label: t('about'), href: '#' }, { label: t('blog'), href: '#' }, { label: t('careers'), href: '#' }] },
    { heading: t('legal'), items: [{ label: t('privacy'), href: '#' }, { label: t('terms'), href: '#' }] },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Smart<span className="text-indigo-600">Biz</span>
            </Link>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed max-w-xs">{t('description')}</p>
          </div>
          {links.map((group) => (
            <div key={group.heading}>
              <div className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">{group.heading}</div>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© 2026 SmartBiz. {t('rights')}</p>
          <div className="flex items-center gap-4">
            {['𝕏', 'in', 'f'].map((icon) => (
              <a key={icon} href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-indigo-50 hover:text-indigo-600 flex items-center justify-center text-sm text-gray-500 transition-colors">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}