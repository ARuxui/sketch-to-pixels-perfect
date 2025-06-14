
import React from 'react';

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-full z-50">
      <div className="bg-white flex w-full flex-col px-[70px] max-md:px-5">
        <nav className="flex w-full max-w-[1103px] items-center gap-[40px_100px] flex-wrap max-md:max-w-full relative">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/3aff4a7b5dd68c319448da48e3dfbae8dea129a4?placeholderIfAbsent=true"
            alt="Ubuntu Dental Logo"
            className="aspect-[1.5] object-contain w-[150px] self-stretch shrink-0 max-w-full"
          />

          {/* Hamburger button for small screens */}
          <button
            className="flex md:hidden ml-auto p-2 rounded focus:outline-none focus:ring-2 focus:ring-[rgba(203,150,48,1)]"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="w-6 h-0.5 bg-black block mb-1 rounded transition-all" style={{ transform: mobileOpen ? 'rotate(45deg) translateY(9px)' : '' }}></span>
            <span className={`w-6 h-0.5 bg-black block mb-1 rounded transition-all ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className="w-6 h-0.5 bg-black block rounded transition-all" style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-8px)' : '' }}></span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex flex-1 items-center gap-[40px_100px] min-w-0">
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
          </div>

          {/* Mobile nav */}
          <div
            className={`${
              mobileOpen ? 'flex' : 'hidden'
            } md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex-col gap-1 animate-fade-in-down transition-all z-40 rounded-b-lg`}
          >
            <a href="#services" className="block text-base text-black font-normal px-4 py-3 hover:text-[rgba(203,150,48,1)] hover:bg-gray-100 transition-colors border-b border-gray-100">
              Services
            </a>
            <a href="#book" className="block text-base text-black font-normal px-4 py-3 hover:text-[rgba(203,150,48,1)] hover:bg-gray-100 transition-colors border-b border-gray-100">
              Book online
            </a>
            <a href="#blog" className="block text-base text-black font-normal px-4 py-3 hover:text-[rgba(203,150,48,1)] hover:bg-gray-100 transition-colors border-b border-gray-100">
              Blog
            </a>
            <a href="#team" className="block text-base text-black font-normal px-4 py-3 hover:text-[rgba(203,150,48,1)] hover:bg-gray-100 transition-colors border-b border-gray-100">
              Meet the team
            </a>
            <a
              href="#contact"
              className="block bg-white px-4 py-3 rounded-b-[10px] border-[rgba(203,150,48,1)] border-t-[3px] text-base text-black font-normal hover:bg-[rgba(203,150,48,0.1)] transition-colors"
            >
              Contact us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
