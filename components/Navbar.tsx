import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { Bars2Icon } from "@heroicons/react/20/solid";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between mx-auto container py-5 px-4">
      <div className="w-[60px] h-[60px]">
        <Link href="/">
          <Image src="/images/logosaas.png" alt="logo" width={60} height={61} />
        </Link>
      </div>
      <div className="hidden md:block">
        <Button text="Get for free" />
      </div>
      <Link href="#" className="md:hidden">
        <Bars2Icon className="text-white size-7" />
      </Link>
    </div>
  );
}
