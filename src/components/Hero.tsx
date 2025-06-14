
import React from 'react';

export const Hero: React.FC = () => {
  const handleBookAppointment = () => {
    // Scroll to contact form or implement booking logic
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="flex min-h-screen w-full">
      {/* Left side - Gold background with content */}
      <div className="bg-[#CB9630] flex-1 flex flex-col justify-center items-start px-12 lg:px-16 py-16 max-w-md lg:max-w-lg">
        {/* Ubuntu Dental Logo */}
        <div className="mb-12">
          <div className="text-white text-4xl lg:text-5xl font-light mb-2">
            <span className="font-light">U</span>
            <span className="font-light italic">buntu</span>
          </div>
          <div className="text-white text-sm tracking-wider uppercase">
            DENTAL
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8">
          YOUR <span className="text-white">SMILE</span>
          <br />
          IS IN OUR <span className="text-[#E6C068]">HANDS</span>
        </h1>

        {/* Subtext */}
        <p className="text-white text-lg mb-8 leading-relaxed">
          <span className="font-semibold">Trust Ubuntu Dental to </span>
          <span className="font-semibold text-[#E6C068]">keep your smile</span>
          <br />
          <span className="font-semibold">healthy and </span>
          <span className="font-semibold text-[#E6C068]">bright</span>
        </p>

        {/* Book appointment button */}
        <button
          onClick={handleBookAppointment}
          className="bg-white text-[#CB9630] font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-lg"
        >
          Book an appointment
        </button>
      </div>

      {/* Right side - Image */}
      <div className="flex-1 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Smiling woman with curly hair"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Mobile responsive - stack vertically on small screens */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            flex-direction: column;
          }
          
          .flex-1:first-child {
            max-width: none;
            min-height: 60vh;
          }
          
          .flex-1:last-child {
            min-height: 40vh;
          }
        }
      `}</style>
    </section>
  );
};
