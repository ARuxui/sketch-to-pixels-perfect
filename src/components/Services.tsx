import React from 'react';
import { ServiceCard } from './ServiceCard';

export const Services: React.FC = () => {
  const servicesData = [
    {
      title: "Consultations",
      services: ["Full consultation", "Limited consultation"],
      className: "pl-[29px] pr-[69px] py-[34px] max-md:px-5"
    },
    {
      title: "Emergency Services",
      services: ["Experience relief from dental pain with our emergency services."],
      className: "px-10 py-[34px] max-md:px-5"
    },
    {
      title: "Preventitive Care",
      services: ["Dental check up", "Teeth cleaning", "Teeth whitening"],
      className: "pt-[47px] pb-7 px-[49px] max-md:px-5"
    },
    {
      title: "Restoration Treatments",
      services: ["Dental filling", "Root canal treatment"],
      className: "pl-[21px] pr-[72px] pt-[47px] pb-7 max-md:px-5"
    },
    {
      title: "Tooth Extration",
      services: ["Tooth extraction", "Wisdom tooth", "Surgical wisdom tooth"],
      className: "pt-[47px] pb-7 px-[35px] max-md:px-5"
    },
    {
      title: "Cosmetic Treatment",
      services: ["Dentures", "Crown and bridges"],
      className: "pt-[47px] pb-7 px-[49px] max-md:px-5"
    }
  ];

  return (
    <section id="services" className="w-full">
      <h2 className="text-black text-[32px] font-bold leading-none tracking-[0.96px] mt-[147px] text-center max-md:mt-10">
        Services
      </h2>
      
      <div className="w-full max-w-[1237px] mt-[50px] mx-auto max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {servicesData.slice(0, 3).map((service, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <ServiceCard
                title={service.title}
                services={service.services}
                className={service.className}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1237px] mt-[70px] mx-auto max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {servicesData.slice(3, 6).map((service, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <ServiceCard
                title={service.title}
                services={service.services}
                className={service.className}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
