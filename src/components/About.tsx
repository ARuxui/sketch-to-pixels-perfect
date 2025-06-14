import React from 'react';

export const About: React.FC = () => {
  return (
    <>
      <div className="bg-[rgba(203,150,48,0.7)] flex w-[570px] shrink-0 max-w-full h-56" />
      <section className="z-10 mt-[-82px] w-full max-w-[1277px] ml-[19px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[66%] max-md:w-full max-md:ml-0">
            <article className="bg-white shadow-[4px_4px_4px_rgba(0,0,0,0.25)] border flex grow flex-col items-stretch leading-10 justify-center w-full px-20 py-[120px] border-[rgba(203,150,48,1)] border-solid max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-[100px]">
              <div className="flex flex-col items-stretch max-md:max-w-full">
                <p className="text-black text-2xl font-normal tracking-[2.4px] max-md:max-w-full">
                  Ubuntu Dental was created out of the need to provide an affordable and quality dental service to the
                  <br />
                  surrounding community.
                  <br />
                  <br />
                  We understand that dental visits can be stressful. At Ubuntu Dental, our caring team will make your experience quick, easy, and stress-free.
                  <br />
                </p>
                <button className="bg-[rgba(203,150,48,0.7)] self-center w-[286px] max-w-full text-xl text-white font-bold tracking-[0.6px] mt-40 px-[70px] py-3 rounded-[10px] hover:bg-[rgba(203,150,48,0.8)] transition-colors max-md:mt-10 max-md:px-5">
                  Learn more
                </button>
              </div>
            </article>
          </div>
          <div className="w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col self-stretch items-stretch text-black my-auto max-md:mt-10">
              <h2 className="text-[64px] font-bold leading-none tracking-[1.92px] self-center max-md:text-[40px]">
                Our story
              </h2>
              <p className="text-base font-normal leading-10 tracking-[0.48px] text-center mt-[38px]">
                Learn about the journey that shaped our practice
                <br />
                and our commitment to your smile.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
