import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";

export default function Hero() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="hero-gradient h-[calc(100vh-140px)] w-full flex items-start justify-center overflow-hidden relative  ">
        {/* TAG */}
        <div className="relative flex flex-col items-center gap-8 md:gap-12 text-center max-w-[642px] mt-[30px] px-6 md:px-0">
          <div className="hidden md:block absolute md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] md:-left-24 lg:-left-44 top-48 animate-bounce">
            <Image
              src="/images/cursor.png"
              alt="image"
              fill={true}
              className=" object-cover object-center"
            />
          </div>
          <div className="hidden md:block absolute md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] -right-28 lg:-right-44 top-28 animate-bounce">
            <Image
              src="/images/message.png"
              alt="image"
              fill={true}
              className=" object-cover object-center"
            />
          </div>
          <div className="flex items-center gap-2 border border-gray-700 py-2 px-4 rounded-full">
            <div className="flex items-center gap-2">
              <p className="text-gray-400 text-tag font-inter font-medium">
                Version 2.0 is here.
              </p>
              <p className="text-white text-tag font-inter font-medium cursor-pointer">
                Read more
              </p>
            </div>
            <ArrowRightIcon className="text-white size-4" />
          </div>
          <h1 className=" text-7xl leading-[4.313rem] md:text-h1 text-white font-bold md:leading-[7.813rem] tracking-[-0.08em]">
            One Task at a Time
          </h1>
          <p className="text-white text-xl md:text-body_large font-inter leading-9 tracking-wide max-w-[520px]">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>

        <div className="absolute bottom-0 w-full h-[100px] 2xl:h-[300px]">
          <div className=" absolute -translate-x-1/2 left-1/2 -top-5 z-50">
            <button className="bg-white duration-300 px-6 hover:px-8 py-4 rounded-[10px] text-base font-inter font-semibold ">
              Get for free
            </button>
          </div>
          <Image
            src="/images/eclipce.svg"
            fill={true}
            alt="image"
            className="object-cover object-top"
          />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
