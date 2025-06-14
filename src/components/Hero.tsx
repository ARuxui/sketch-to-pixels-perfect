import React from 'react';

export const Hero: React.FC = () => {
  const handleBookAppointment = () => {
    // Scroll to contact form or implement booking logic
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[rgba(203,150,48,0.7)] flex w-[571px] max-w-full flex-col text-xl text-white font-normal pt-[340px] pb-[183px] px-20 max-md:pl-5 max-md:py-[100px]">
      <div className="flex mr-[-246px] mb-[-37px] flex-col items-center max-md:max-w-full max-md:mb-2.5">
        <h1 className="text-[64px] self-stretch max-md:max-w-full max-md:text-[40px]">
          YOUR{" "}
          <span className="font-bold text-white">SM</span>
          <span className="font-bold text-[rgba(219,182,110,1)]">ILE</span>
          <br />
          IS IN OUR <span className="text-[rgba(219,182,110,1)]">HANDS</span>
        </h1>
        <p className="leading-10 tracking-[0.6px] text-center mt-[70px] max-md:mt-10">
          <span className="font-bold">Trust Ubuntu Dental to </span>
          <span className="font-bold text-[rgba(203,150,48,1)]">keep your smile</span>
          <br />
          <span className="font-bold">healthy and </span>
          <span className="font-bold text-[rgba(203,150,48,1)]">bright</span>
        </p>
        <button
          onClick={handleBookAppointment}
          className="bg-white w-[314px] max-w-full text-[rgba(203,150,48,1)] font-bold tracking-[0.6px] leading-10 mt-8 px-12 py-3 rounded-[10px] hover:bg-gray-100 transition-colors max-md:px-5"
        >
          Book an appointment
        </button>
      </div>
    </section>
  );
};
