import { HeroSection } from '@/components/home/hero-section';
import { WhoItsFor } from '@/components/home/who-its-for';
import { ServicesOverview } from '@/components/home/services-overview';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { HowItWorks } from '@/components/home/how-it-works';
import { Testimonials } from '@/components/home/testimonials';
import { CTASection } from '@/components/home/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoItsFor />
      <ServicesOverview />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </>
  );
}
