import React from "react";

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {}

const TextInput: React.FC<TextInputProps> = ({ ...props }) => {
  return <input className="rounded-md outline-none w-full bg-white ring-slate-400 ring-1 focus-visible:ring-amber-400 p-2 h-8" {...props} />;
};

export default TextInput;
