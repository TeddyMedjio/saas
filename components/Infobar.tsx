import Link from "next/link";

export default function Infobar() {
  return (
    <div className="w-full h-12 background-gradient flex items-center justify-center gap-1">
      <div className="flex items-center gap-2">
        <p className="font-sans text-body_s hidden md:block">
          This page is included in a free SaaS Website Kit.{" "}
        </p>

        <Link href="/" className="font-sans text-body_s underline ">
          View the complete Kit
        </Link>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
