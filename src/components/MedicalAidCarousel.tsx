import React, { useState } from 'react';

export const MedicalAidCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(2); // Third dot is active as shown in design

  const medicalAidLogos = [
    { src: "https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/624b09ff83fc85d99163985961908e5b2638db17?placeholderIfAbsent=true", alt: "Medical Aid 1", className: "aspect-[2] object-contain w-[170px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/8d03a3848a5b3ecf9989e93360a403c0a95ab16e?placeholderIfAbsent=true", alt: "Medical Aid 2", className: "aspect-[1] object-contain w-[195px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/ef89161ed4f5e34ce7c7cd58c242764961b0593a?placeholderIfAbsent=true", alt: "Medical Aid 3", className: "aspect-[1.65] object-contain w-[195px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/8bb060ce844139608cb3620c7a02e65a825f438a?placeholderIfAbsent=true", alt: "Medical Aid 4", className: "aspect-[1.77] object-contain w-[196px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/bfb9fa8d41b089638a8ccfc9e235839d9d34b3d5?placeholderIfAbsent=true", alt: "Medical Aid 5", className: "aspect-[1.28] object-contain w-[196px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/e8713bac471464a7858d804f12a2a811ae416cde?placeholderIfAbsent=true", alt: "Medical Aid 6", className: "aspect-[1.36] object-contain w-[99px]" }
  ];

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="self-stretch flex w-full flex-col items-center mt-[47px] pl-20 max-md:max-w-full max-md:mt-10 max-md:pl-5">
      <h2 className="text-black text-5xl font-normal leading-none tracking-[1.44px] max-md:max-w-full max-md:text-[40px]">
        We accept Cash, Card and most Medical Aid
      </h2>
      
      <div className="self-stretch flex items-center gap-5 flex-wrap justify-between mt-[85px] max-md:max-w-full max-md:mt-10">
        {medicalAidLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className={`${logo.className} self-stretch shrink-0 max-w-full my-auto hover:opacity-80 transition-opacity`}
          />
        ))}
      </div>
      
      <div className="flex w-[68px] items-stretch gap-[19px] ml-[31px] mt-5">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`flex w-2.5 shrink-0 h-2.5 rounded-[50%] transition-colors ${
              currentSlide === index ? 'bg-black' : 'bg-[rgba(217,217,217,1)] hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
