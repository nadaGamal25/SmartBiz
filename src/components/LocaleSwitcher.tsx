'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { locales, type Locale } from '@/i18n/config';
import { useTransition } from 'react';

export function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const nextLocale = locale === 'en' ? 'ar' : 'en';

  function switchLocale() {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <button
      onClick={switchLocale}
      disabled={isPending}
      className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-full px-4 py-1.5 transition-all disabled:opacity-50"
    >
      <span >{nextLocale === 'ar' ? '🇸🇦' : '🇺🇸'}</span>
      <span>{nextLocale === 'ar' ? 'العربية' : 'English'}</span>
    </button>
  );
}