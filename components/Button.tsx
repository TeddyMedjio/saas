interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="bg-white hover:bg-slate-100 duration-300 px-3 hover:px-4 py-2 rounded-[10px] text-base font-inter font-medium ">
      {text}
    </button>
  );
}
