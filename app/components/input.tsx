import { InputHTMLAttributes, ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  error?: string;
  labelIcon?: ReactNode;
}

export default function Input({
  name,
  placeholder,
  error,
  labelIcon,
  ...rest
}: InputProps) {
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col gap-1">
      <div className="relative flex">
        <label
          htmlFor={name}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-stone-600 *:size-5"
        >
          {labelIcon}
        </label>
        <input
          id={name}
          className={`w-full h-12 pl-11 rounded-3xl bg-transparent text-stone-600 border placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-offset-2 transition ${
            error
              ? "border-red-500 focus:ring-red-400"
              : "border-stone-400 focus:ring-stone-300"
          }`}
          name={name}
          placeholder={placeholder}
          disabled={pending}
          {...rest}
        />
      </div>
      {error && <p className="pt-2 pl-1 text-red-400">{error}</p>}
    </div>
  );
}
