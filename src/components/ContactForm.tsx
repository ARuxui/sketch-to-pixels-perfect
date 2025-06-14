import React, { useState } from 'react';

interface FormData {
  name: string;
  surname: string;
  email: string;
  cellphone: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    email: '',
    cellphone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      surname: '',
      email: '',
      cellphone: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <>
      <section className="flex flex-col self-stretch relative min-h-[498px] w-full items-center text-xl text-white font-bold tracking-[0.6px] leading-10 justify-center mt-[133px] px-20 py-[218px] max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-[100px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/0cb0aaf88fea9f2a62620e02e0661a6c13389831?placeholderIfAbsent=true"
          alt="Dental Tips Background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <button className="relative bg-[rgba(203,150,48,1)] w-[314px] max-w-full ml-3.5 -mb-10 px-[70px] py-3 rounded-[10px] hover:bg-[rgba(203,150,48,0.8)] transition-colors max-md:mb-2.5 max-md:px-5">
          Dental Tips
        </button>
      </section>

      <section id="contact" className="bg-[rgba(203,150,48,0.7)] self-stretch flex w-full flex-col items-stretch mt-[62px] pl-[79px] pr-[39px] pt-[19px] pb-[38px] max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="self-center w-full max-w-[1157px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[41%] max-md:w-full max-md:ml-0">
              <h2 className="text-white text-[64px] font-bold leading-10 tracking-[1.92px] mt-[21px] max-md:text-[40px] max-md:leading-7 max-md:mt-10">
                Have
                <br />
                <br />a question?
              </h2>
            </div>
            <div className="w-[31%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow items-stretch gap-[30px] text-base text-white font-bold whitespace-nowrap tracking-[0.48px] leading-10 max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/be7308bb321943b38906633f2d62f11a/b5519ef96f5b580adfd0b3ea098d1a2561835e00?placeholderIfAbsent=true"
                  alt=""
                  className="aspect-[1] object-contain w-2 shrink-0 my-auto"
                />
                <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit">
                  <label htmlFor="name" className="z-10">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white border flex shrink-0 h-[60px] rounded-[10px] border-white border-solid px-4 text-black"
                    required
                  />
                  <label htmlFor="email" className="z-10 mt-[26px]">e-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white border flex shrink-0 h-[60px] rounded-[10px] border-white border-solid px-4 text-black"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="w-[27%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch text-base text-white font-bold whitespace-nowrap tracking-[0.48px] leading-10 max-md:mt-10">
                <label htmlFor="surname" className="z-10">Surname</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  className="bg-white border flex shrink-0 h-[60px] rounded-[10px] border-white border-solid px-4 text-black"
                  required
                />
                <label htmlFor="cellphone" className="z-10 mt-[26px]">Cellphone</label>
                <input
                  type="tel"
                  id="cellphone"
                  name="cellphone"
                  value={formData.cellphone}
                  onChange={handleInputChange}
                  className="bg-white border flex shrink-0 h-[60px] rounded-[10px] border-white border-solid px-4 text-black"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full mt-[33px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[41%] max-md:w-full max-md:ml-0">
              <p className="text-white text-2xl font-bold leading-10 tracking-[0.72px] text-center max-md:max-w-full max-md:mt-10">
                Whether you need a routine check-up or urgent care, we're here for you.
                <br />
                <br />
                Get in touch and let's take care of your smile.
              </p>
            </div>
            <div className="w-[59%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow items-stretch gap-[13px] font-bold whitespace-nowrap flex-wrap mt-[43px] max-md:max-w-full max-md:mt-10">
                <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                  <label htmlFor="message" className="text-base text-white tracking-[0.48px] leading-10 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white border rounded-[10px] border-white border-solid p-4 text-black h-[166px] resize-none max-md:h-[100px]"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-xl text-[rgba(203,150,48,1)] tracking-[0.6px] leading-loose mt-[171px] pb-6 px-[26px] rounded-[10px] hover:bg-gray-100 transition-colors max-md:mt-10 max-md:px-5"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
