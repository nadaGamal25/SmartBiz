import { setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n/config';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar locale={locale as Locale} />
      <Hero locale={locale as Locale} />
      <Features locale={locale as Locale} />
      <HowItWorks locale={locale as Locale} />
      <Testimonials locale={locale as Locale} />
      <Pricing locale={locale as Locale} />
      <CtaSection locale={locale as Locale} />
      <Footer locale={locale as Locale} />
    </>
  );
}