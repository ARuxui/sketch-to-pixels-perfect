
import React from 'react';
import { Tooth } from 'lucide-react';

const UbuntuLogo = () => (
    <div className="flex items-center gap-3">
      <Tooth className="h-16 w-16 md:h-20 md:w-20 text-white flex-shrink-0" strokeWidth={1.2}/>
      <div>
        <h2 className="text-3xl md:text-4xl font-serif text-white">Ubuntu</h2>
        <p className="text-lg md:text-xl font-light text-white tracking-[0.2em]">DENTAL</p>
      </div>
    </div>
  );

export const Hero: React.FC = () => {
  const handleBookAppointment = () => {
    // Scroll to contact form or implement booking logic
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="flex flex-col lg:flex-row w-full">
      {/* Left side content */}
      <div className="w-full lg:w-5/12 bg-[#cb9630] text-white flex flex-col justify-center p-8 sm:p-12 md:p-16">
        <div className="mb-10">
          <UbuntuLogo />
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-light leading-tight">
          YOUR <span className="font-bold text-[#DBB66E]">SMILE</span>
          <br />
          IS IN OUR <span className="font-bold text-[#DBB66E]">HANDS</span>
        </h1>
        
        <p className="mt-6 text-base sm:text-lg">
          Trust Ubuntu Dental to keep your smile healthy and bright
        </p>
        
        <button
          onClick={handleBookAppointment}
          className="mt-8 bg-white text-[#cb9630] font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-200 transition-colors self-start"
        >
          Book an appointment
        </button>
      </div>
      
      {/* Right side image */}
      <div className="w-full lg:w-7/12">
        <img 
          src="/lovable-uploads/51c120f5-a0b4-4305-ac02-f277704c1c43.png" 
          alt="Smiling woman with perfect teeth" 
          className="w-full h-full object-cover min-h-[300px] sm:min-h-[400px] lg:min-h-0" 
        />
      </div>
    </section>
  );
};
