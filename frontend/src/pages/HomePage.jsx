import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BrandsSection from "@/components/BrandsSection";
import StrengthsSection from "@/components/StrengthsSection";
import RealizationsSection from "@/components/RealizationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header isScrolled={isScrolled} />
      <main>
        <HeroSection />
        <ServicesSection />
        <BrandsSection />
        <StrengthsSection />
        <RealizationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;