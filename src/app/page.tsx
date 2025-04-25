"use client";

import { useEffect } from "react";
import { toast } from "sonner";

import { trackEvent } from "@/lib/mixpanel";

// import { Button } from "@/components/ui/button"
// import HeroSection from "@/components/sections/HeroSection";
import { HeroSectionOne } from '../components/sections/HeroSectionOne';
import { Features } from "@/components/sections/Features";
import LogoCloud from '@/components/LogoCloud';
import FooterBlock from '../components/sections/Footer';
import NewsletterSubscribe from '../components/sections/NewsletterSubscribe';
import { Tertimonials } from '../components/sections/Testimonials';
import { Programs } from '../components/sections/OurPrograms';
import ContactSection from '../components/sections/ContactSection';



export default function Home() {

    useEffect(() => {
        if (sessionStorage.getItem("sonnerShown")) return;
    
        const showToast = () => {
          toast("👋 Ready to ignite your STEAM journey?", {
            description: "Explore our workshops, DIY kits & mentorship programs now!",
            action: {
              label: "View Courses",
              onClick: () => {
                trackEvent("Sonner CTA Clicked", {
                  location: "Landing Page",
                });
                window.location.href = "/courses";
              },
            },
            duration: 8000,
          });
        };
    
        // Show first toast after 8s
        const initialTimeout = setTimeout(() => {
          showToast();
        }, 16000);
    
        // Then repeat every 60s after that
        const interval = setInterval(() => {
          showToast();
        }, 84000); // every 60s
    
        // Save a flag so this runs once per session
        sessionStorage.setItem("sonnerShown", "true");
    
        // Cleanup on unmount
        return () => {
          clearTimeout(initialTimeout);
          clearInterval(interval);
        };
      }, []);

  return (
    <main>
        <HeroSectionOne />
        <LogoCloud />
        <Features />

        <Tertimonials />

        <Programs />

        <ContactSection />
        <NewsletterSubscribe />
        <FooterBlock />
    </main>
  );
}
