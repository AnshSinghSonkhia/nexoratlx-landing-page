import { Button } from "@/components/ui/button"
import HeroSection from "@/components/sections/HeroSection";
import { HeroSectionOne } from '../components/sections/HeroSectionOne';
import { Features } from "@/components/Features";
import LogoCloud from '@/components/LogoCloud';
import FooterBlock from '../components/sections/Footer';
import NewsletterSubscribe from '../components/sections/NewsletterSubscribe';

export default function Home() {
  return (
    <main>
        <HeroSectionOne />
        <Features />
        <LogoCloud />

        <NewsletterSubscribe />
        <FooterBlock />
    </main>
  );
}
