import Image from "next/image";

export default function Logos() {
  return (
    <div className="mx-auto container px-10 lg:px-0 my-10 md:my-10">
      <div className="w-full">
        <p className=" text-center font-inter text-body_s md:text-base text-[#7A7A7A] mb-[38px]">
          Trusted by the world’s most innovative teams
        </p>
        <div className=" flex items-center justify-center lg:justify-between flex-wrap gap-4">
          <div className="relative h-[32px] w-[90px] md:w-[110px] ">
            <Image
              src="/images/acme.png"
              alt="logo"
              fill={true}
              className="object-contain object-center"
            />
          </div>
          <div className="relative h-[32px] w-[90px] md:w-[110px]">
            <Image
              src="/images/quantum.png"
              alt="logo"
              fill={true}
              className="object-contain object-center"
            />
          </div>
          <div className="relative h-[32px] w-[90px] md:w-[110px] ">
            <Image
              src="/images/echo.png"
              alt="logo"
              fill={true}
              className="object-contain object-center"
            />
          </div>
          <div className="relative h-[32px] w-[90px] md:w-[100px] ">
            <Image
              src="/images/celestia.png"
              alt="logo"
              fill={true}
              className="object-contain object-center"
            />
          </div>
          <div className="relative h-[32px] w-[80px] ">
            <Image
              src="/images/pulse.png"
              alt="logo"
              fill={true}
              className="object-contain object-center"
            />
          </div>
          <div className="relative h-[32px] w-[80px] ">
            <Image
              src="/images/apex.png"
              alt="logo"
              fill={true}
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
