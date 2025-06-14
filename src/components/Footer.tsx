import React from 'react';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Book online", href: "#book" },
    { name: "Blog", href: "#blog" },
    { name: "Contact us", href: "#contact" }
  ];

  const socialLinks = [
    { src: "https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/a21c5d7a797ad0ad0a9a9e0f1e59889dc1c4386c?placeholderIfAbsent=true", alt: "Facebook", href: "#" },
    { src: "https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/87711db20ab05f6b368866ed1e4a577964d5c6be?placeholderIfAbsent=true", alt: "Instagram", href: "#" },
    { src: "https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/59745a8d8f6116d868197e6bde1e979f116a7eda?placeholderIfAbsent=true", alt: "LinkedIn", href: "#" }
  ];

  return (
    <footer className="bg-black self-stretch flex w-full flex-col items-center mt-[120px] pr-[23px] pb-[11px] max-md:max-w-full max-md:mt-10 max-md:pr-5">
      <div className="z-10 flex mt-[-27px] w-full max-w-[1255px] items-center gap-5 flex-wrap justify-between max-md:max-w-full">
        <nav className="text-white text-xl font-normal leading-10 tracking-[0.6px] my-auto">
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul className="text-base space-y-1">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="hover:text-[rgba(203,150,48,1)] transition-colors"
                >
                  &gt; {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="self-stretch text-base text-white font-normal tracking-[0.48px] leading-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/96ba1a53d0f1cb131d64b997ec052c7f87f844fb?placeholderIfAbsent=true"
            alt="Ubuntu Dental Logo"
            className="aspect-[1] object-contain w-full z-10 mb-4"
          />
          <address className="not-italic">
            Find us at Shop 2, Middestad Mall,
            <br />
            Charl Malan Street,
            <br />
            Bellville, 7530.
          </address>
        </div>

        <div className="self-stretch flex flex-col items-stretch my-auto">
          <h3 className="text-white text-xl font-bold leading-10 tracking-[0.6px]">
            Contact Info
          </h3>
          <div className="flex w-full flex-col mt-2.5 pl-3">
            <a 
              href="tel:0662385838"
              className="text-white text-base font-normal leading-10 tracking-[0.48px] hover:text-[rgba(203,150,48,1)] transition-colors"
            >
              066 238 5838
            </a>
            <a 
              href="mailto:info@ubuntudental.com"
              className="text-white text-base font-normal leading-10 tracking-[0.48px] self-stretch mt-2.5 hover:text-[rgba(203,150,48,1)] transition-colors"
            >
              info@ubuntudental.com
            </a>
            <div className="flex gap-8 mt-[17px]">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="hover:opacity-80 transition-opacity"
                  aria-label={social.alt}
                >
                  <img
                    src={social.src}
                    alt={social.alt}
                    className="aspect-[1] object-contain w-[30px] shrink-0"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="border self-stretch shrink-0 h-px mt-11 border-[rgba(203,150,48,1)] border-solid max-md:max-w-full max-md:mt-10" />
      
      <div className="text-[rgba(203,150,48,1)] text-[10px] font-bold leading-[17px] tracking-[0.3px] text-center mt-[11px]">
        2025 Ubuntu Dental.
        <br />
        All Rights Reserved.
        <br />
        Web Design & SEO by WebXP.
      </div>
    </footer>
  );
};
