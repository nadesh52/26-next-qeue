import React from "react";

interface SocialMediaLoginButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  title: string;
}

const SocialMediaLoginButton: React.FC<SocialMediaLoginButtonProps> = ({
  title,
  icon,
  ...props
}) => {
  return (
    <button
      className="flex h-10 w-full items-center gap-2 rounded-md bg-white border border-amber-400 py-2 px-4 hover:bg-amber-400 hover:text-white"
      {...props}
    >
      <div>{icon}</div>
      <div className="h-full w-[1px] bg-slate-200"></div>
      <p className="px-2">{title}</p>
    </button>
  );
};

export default SocialMediaLoginButton;
