import React from 'react';

interface ServiceCardProps {
  title: string;
  services: string[];
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, services, className = "" }) => {
  return (
    <article className={`bg-white shadow-[20px_20px_30px_rgba(0,0,0,0.25)] border flex grow flex-col text-base text-black font-bold tracking-[0.48px] w-full rounded-[10px] border-[rgba(203,150,48,1)] border-solid hover:shadow-[25px_25px_35px_rgba(0,0,0,0.3)] transition-shadow ${className}`}>
      <h3 className="text-4xl leading-none tracking-[1.08px] text-center mb-6">
        {title}
      </h3>
      <div className="font-normal leading-[25px] mb-6">
        {services.map((service, index) => (
          <div key={index}>{service}</div>
        ))}
      </div>
      <p className="text-center mb-6">
        Explore our packages
      </p>
      <button className="z-10 bg-[rgba(203,150,48,0.7)] self-center w-[119px] max-w-full text-[13px] text-white tracking-[0.39px] leading-[3] pb-7 px-[23px] rounded-[10px] hover:bg-[rgba(203,150,48,0.8)] transition-colors max-md:px-5">
        Learn more
      </button>
    </article>
  );
};
