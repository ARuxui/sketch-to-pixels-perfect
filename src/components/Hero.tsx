
import React from 'react';

export const Hero: React.FC = () => {
  const handleBookAppointment = () => {
    // Scroll to contact form or implement booking logic
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-[600px] flex items-center justify-center text-white text-center">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/0cb0aaf88fea9f2a62620e02e0661a6c13389831?placeholderIfAbsent=true"
        alt="Dental instruments background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="absolute inset-0 bg-[rgba(203,150,48,0.7)]" />
      <div className="relative z-10 flex flex-col items-center px-4">
        <h1 className="text-4xl md:text-6xl leading-tight">
          YOUR{" "}
          <span className="font-bold text-white">SM</span>
          <span className="font-bold text-[rgba(219,182,110,1)]">ILE</span>
          <br />
          IS IN OUR <span className="font-bold text-[rgba(219,182,110,1)]">HANDS</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed">
          <span className="font-bold">Trust Ubuntu Dental to </span>
          <span className="font-bold text-[rgba(203,150,48,1)]">keep your smile</span>
          <br />
          <span className="font-bold">healthy and </span>
          <span className="font-bold text-[rgba(203,150,48,1)]">bright</span>
        </p>
        <button
          onClick={handleBookAppointment}
          className="mt-8 bg-white text-[rgba(203,150,48,1)] font-bold py-3 px-12 rounded-[10px] hover:bg-gray-100 transition-colors text-xl"
        >
          Book an appointment
        </button>
      </div>
    </section>
  );
};
