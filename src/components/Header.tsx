import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-full">
      <div className="bg-white flex w-full flex-col px-[70px] max-md:max-w-full max-md:px-5">
        <nav className="flex w-full max-w-[1103px] items-center gap-[40px_100px] flex-wrap max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/3aff4a7b5dd68c319448da48e3dfbae8dea129a4?placeholderIfAbsent=true"
            alt="Ubuntu Dental Logo"
            className="aspect-[1.5] object-contain w-[150px] self-stretch shrink-0 max-w-full"
          />
          <a href="#services" className="self-stretch my-auto text-base text-black font-normal hover:text-[rgba(203,150,48,1)] transition-colors">
            Services
          </a>
          <a href="#book" className="self-stretch my-auto text-base text-black font-normal hover:text-[rgba(203,150,48,1)] transition-colors">
            Book online
          </a>
          <a href="#blog" className="self-stretch my-auto text-base text-black font-normal hover:text-[rgba(203,150,48,1)] transition-colors">
            Blog
          </a>
          <a href="#team" className="self-stretch grow shrink w-[104px] my-auto text-base text-black font-normal hover:text-[rgba(203,150,48,1)] transition-colors">
            Meet the team
          </a>
          <a
            href="#contact"
            className="bg-white self-stretch my-auto px-[22px] py-[19px] rounded-[10px] border-[rgba(203,150,48,1)] border-solid border-[3px] text-base text-black font-normal hover:bg-[rgba(203,150,48,0.1)] transition-colors max-md:px-5"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
};
