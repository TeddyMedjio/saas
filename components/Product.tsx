import Image from "next/image";
import { Faq } from "./Faq";

export default function Product() {
  return (
    <div className="gradient-product">
      <div className="mx-auto container py-[40px] lg:py-[120px] px-4 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center max-w-[580px] text-center gap-5">
          <h2 className=" text-[32px] md:text-h2 text-white font-bold">
            Intuitive interface
          </h2>
          <p className=" text-base md:text-body_large font-inter text-gray-50">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <div className="relative w-[356px] h-[220px]  md:w-[704px] md:h-[437px]  lg:w-[1092px] lg:h-[678px] mt-10 md:mt-20">
          <Image
            quality={100}
            src="/images/app_picture.png"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </div>
        <div className=" w-[95%] md:w-[90%] lg:w-[60%] mt-20 lg:mt-28">
          <h2 className=" text-[32px] md:text-h2 text-white font-bold text-center mb-10 ">
            Frequently asked questions
          </h2>
          <Faq />
        </div>
      </div>
    </div>
  );
}
