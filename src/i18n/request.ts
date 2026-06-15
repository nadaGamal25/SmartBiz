import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale } from '@/i18n/config';

const messageImports = {
  en: () => import('../../messages/en.json'),
  ar: () => import('../../messages/ar.json'),
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'en';
  }

  const messages = (await messageImports[locale as Locale]()).default;

  return { locale, messages };
});