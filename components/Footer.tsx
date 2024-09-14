import Image from "next/image";
import React from "react";

const logos = [
  {
    id: "1",
    image: "/images/twitter.svg",
  },
  {
    id: "2",
    image: "/images/instagram.svg",
  },
  {
    id: "3",
    image: "/images/pinterest.svg",
  },
  {
    id: "4",
    image: "/images/linkeding.svg",
  },
  {
    id: "5",
    image: "/images/tiktok.svg",
  },
  {
    id: "6",
    image: "/images/youtube.svg",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto container py-[40px] lg:py-[120px] flex flex-col items-center justify-center gap-10 px-4 relative">
        <div className="hidden md:block absolute top-20 md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] md:-left-24 lg:left-20  animate-bounce">
          <Image
            src="/images/emojistar.png"
            alt="image"
            fill={true}
            className=" object-cover object-center"
            draggable={false}
          />
        </div>
        <div className="hidden md:block absolute md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] -right-10 lg:right-24 top-28 animate-bounce-two">
          <Image
            src="/images/helix.png"
            alt="image"
            fill={true}
            className=" object-cover object-center"
            draggable={false}
          />
        </div>
        <div className="text-center max-w-[540px] space-y-4 ">
          <h2 className=" font-dm_sans text-[32px] md:text-h2 text-white font-bold">
            Get instant access
          </h2>
          <p className="text-[#BBBBBB] font-inter">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <form
            action="#"
            method="get"
            className="flex flex-col md:flex-row items-center justify-center gap-2 w-full"
          >
            <input
              pattern=".+@example\.com"
              required
              type="email"
              name="email"
              placeholder="email@email.com"
              className=" placeholder-[#ffffff7c] w-full text-center md:text-start outline-none bg-[#ffffff20] pl-4 py-2 rounded-[10px] text-white"
            />
            <input
              type="submit"
              name="email"
              value="Get access"
              className="bg-white duration-300 px-3 hover:px-4 py-2 rounded-[10px] text-base font-inter font-medium text-black cursor-pointer w-full md:w-fit"
            />
          </form>
        </div>
      </div>
      <div className=" border-t border-[#202020] mt-10 py-5 flex items-center justify-center px-4">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between w-full">
          <p className="text-[#808080] font-inter mb-2 md:mb-0">
            {" "}
            ©{new Date().getFullYear()} Task App, Inc All rights reserved
          </p>
          <div className="flex items-center gap-4">
            {logos.map((logo) => (
              <div key={logo.id}>
                <Image
                  src={logo.image}
                  width={24}
                  height={24}
                  alt="image logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
