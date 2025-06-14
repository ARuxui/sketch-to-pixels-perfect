import React from 'react';

export const Location: React.FC = () => {
  const hours = [
    { day: "Monday", time: "08:30 - 16:30" },
    { day: "Tuesday", time: "08:30 - 16:30" },
    { day: "Wednesday", time: "08:30 - 16:30" },
    { day: "Thursday", time: "08:30 - 16:30" },
    { day: "Friday", time: "08:30 - 16:30" },
    { day: "Saturday", time: "09:00 - 12:00" },
    { day: "Sunday", time: "CLOSED" }
  ];

  return (
    <section className="w-full max-w-[1219px] mt-[154px] mx-auto max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-2/5 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/c5ba0eb373c1244ac9d10c1c614f76b9e99ceb5d?placeholderIfAbsent=true"
            alt="Ubuntu Dental Location"
            className="aspect-[0.98] object-contain w-full rounded-[10px] max-md:max-w-full max-md:mt-10"
          />
        </div>
        <div className="w-3/5 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full max-md:mt-10">
            <h2 className="text-black text-[32px] font-bold leading-none tracking-[0.96px] ml-[37px] max-md:ml-2.5">
              Location
            </h2>
            <div className="mt-12 max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[62%] max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col max-md:mt-10">
                    <address className="bg-white flex w-[349px] max-w-full flex-col text-black pl-[18px] pr-[54px] pb-[122px] not-italic max-md:pr-5 max-md:pb-[100px]">
                      <h3 className="text-2xl font-bold leading-loose tracking-[0.72px]">
                        Ubuntu Dental
                      </h3>
                      <div className="text-base font-normal leading-10 tracking-[0.48px] mt-[22px] -mb-6 max-md:mb-2.5">
                        Find us at Shop 2, Middestad Mall,
                        <br />
                        Charl Malan Street,
                        <br />
                        Bellville, 7530.
                        <br />
                        <br />
                        Call us: <a href="tel:0662385838" className="hover:text-[rgba(203,150,48,1)] transition-colors">066 238 5838</a>
                      </div>
                    </address>
                    <button className="bg-[rgba(203,150,48,0.7)] text-xl text-white font-bold tracking-[0.6px] leading-10 mt-[11px] px-[70px] py-3 rounded-[10px] hover:bg-[rgba(203,150,48,0.8)] transition-colors max-md:px-5">
                      Get directions
                    </button>
                  </div>
                </div>
                <div className="w-[38%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-stretch text-black max-md:mt-10">
                    <h3 className="text-2xl font-bold leading-loose tracking-[0.72px]">
                      Hours
                    </h3>
                    <div className="text-base font-normal leading-10 tracking-[1.6px] mt-[22px]">
                      {hours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span>{schedule.day}</span>
                          <span>{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
