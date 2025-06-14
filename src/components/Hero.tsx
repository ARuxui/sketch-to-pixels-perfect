
import React from "react";

export const Hero: React.FC = () => {
  // Placeholder logo and woman - swap src as needed!
  const logo =
    "https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/3aff4a7b5dd68c319448da48e3dfbae8dea129a4?placeholderIfAbsent=true";
  const woman =
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=570&q=80&facepad=3"; // A smiling woman

  const handleBookAppointment = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="w-full min-h-[570px] flex flex-col md:flex-row items-stretch bg-white"
      id="hero"
    >
      {/* Left - Gold area with logo, title, etc */}
      <div className="md:w-1/2 w-full bg-[rgba(203,150,48,0.7)] flex flex-col px-8 md:px-16 justify-center py-10 md:py-0 relative">
        <img
          src={logo}
          alt="Ubuntu Dental logo"
          className="w-36 h-auto mb-8 md:mb-10 mt-2 md:mt-0"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-4" style={{ lineHeight: 1.08 }}>
          YOUR <span className="font-bold text-[rgba(219,182,110,1)]">SMILE</span>
          <br />
          IS IN OUR{" "}
          <span className="font-bold text-[rgba(219,182,110,1)]">HANDS</span>
        </h1>
        <p className="text-lg md:text-xl font-medium text-white mb-8 mt-4 max-w-md">
          Trust Ubuntu Dental to keep your smile{" "}
          <span className="text-[rgba(219,182,110,1)] font-bold">healthy and bright</span>.
        </p>
        <button
          onClick={handleBookAppointment}
          className="w-fit px-7 py-3 rounded-[10px] bg-white text-[rgba(203,150,48,1)] font-bold text-base tracking-[0.5px] shadow hover:bg-gray-100 border border-white transition-colors"
        >
          Book an appointment
        </button>
      </div>
      {/* Right - Woman's photo */}
      <div className="md:w-1/2 w-full bg-white flex items-center justify-center relative h-[340px] md:h-auto">
        <img
          src={woman}
          alt="Smiling Woman"
          className="h-[300px] md:h-[500px] w-auto object-cover rounded-xl md:rounded-none shadow-lg drop-shadow-md mx-auto mt-8 mb-4 md:my-0"
          style={{ maxHeight: "90%", maxWidth: "100%" }}
        />
      </div>
    </section>
  );
};

