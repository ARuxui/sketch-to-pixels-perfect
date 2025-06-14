import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Team } from '@/components/Team';
import { Location } from '@/components/Location';
import { ContactForm } from '@/components/ContactForm';
import { MedicalAidCarousel } from '@/components/MedicalAidCarousel';
import { Footer } from '@/components/Footer';

export default function Index() {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center">
      <Header />
      
      <main className="w-full">
        <Hero />
        <About />
        <Services />
        <Team />
        <Location />
        <ContactForm />
        <MedicalAidCarousel />
      </main>
      
      <Footer />
    </div>
  );
}
