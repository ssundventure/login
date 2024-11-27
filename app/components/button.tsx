"use client";
import { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function Button({ text, ...rest }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full h-12 rounded-3xl py-2 font-medium text-stone-600 bg-stone-200 hover:bg-stone-200 active:bg-stone-100 transition-colors disabled:cursor-not-allowed disabled:text-stone-400 disabled:bg-stone-200"
      disabled={pending}
      {...rest}
    >
      {pending ? "Loading..." : text}
    </button>
  );
}
