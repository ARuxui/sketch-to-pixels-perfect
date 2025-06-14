import React from 'react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr Joshua-Joel Isaacs",
      description: "Dr Isaacs started his dentistry career in the Northern Cape. His passion for dentistry ranges from General Dentistry and Oral Health Management to Advanced Cosmetics and Endodontics.",
      image: "https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/cadec7deabc6691b203d0b47c44c1a8024c7878f?placeholderIfAbsent=true"
    },
    {
      name: "Dr Luke Philander",
      description: "Dr Philander is a comprehensive dentist with a love for Aesthetics and Pediatric Dentistry. With his uplifting personality, he always finds a way to help patients look and feel great.",
      image: "https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/f36afdb7386a56c7022fa1e42115e2d8dc03a36e?placeholderIfAbsent=true"
    }
  ];

  return (
    <section id="team" className="w-full">
      <h2 className="text-black text-[32px] font-bold leading-none tracking-[0.96px] mt-[143px] text-center max-md:mt-10">
        Dentists on Duty
      </h2>
      <p className="text-black text-xl font-normal leading-10 tracking-[0.6px] text-center mt-[29px] max-md:max-w-full">
        We're more than just dental professionals, we're part of your community.
        <br />
        Our team is proud to serve with heart, professionalism, and a smile.
      </p>

      <div className="w-full max-w-[1310px] mt-[50px] mx-auto max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {teamMembers.map((member, index) => (
            <article key={index} className="w-6/12 max-md:w-full max-md:ml-0">
              <div className="flex flex-col shadow-[20px_20px_30px_rgba(0,0,0,0.4)] relative min-h-[627px] grow text-2xl text-white font-normal tracking-[0.72px] leading-10 pt-[465px] rounded-[10px] hover:shadow-[25px_25px_35px_rgba(0,0,0,0.5)] transition-shadow max-md:max-w-full max-md:mt-10 max-md:pt-[100px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute h-full w-full object-cover inset-0 rounded-[10px]"
                />
                <div className="relative bg-black pb-[54px] px-7 rounded-[10px] max-md:max-w-full max-md:px-5">
                  <h3 className="text-2xl font-normal tracking-[0.72px] leading-10">
                    {member.name}
                  </h3>
                  <p className="text-base leading-[29px] mt-2">
                    {member.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button className="bg-[rgba(203,150,48,0.7)] w-[314px] max-w-full text-xl text-white font-bold tracking-[0.6px] leading-10 mt-[76px] px-[66px] py-3 rounded-[10px] hover:bg-[rgba(203,150,48,0.8)] transition-colors mx-auto block max-md:mt-10 max-md:px-5">
        View all members
      </button>
    </section>
  );
};
