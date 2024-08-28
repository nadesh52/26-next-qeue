import Link from "next/link";
import React from "react";

const LinkButton = ({ children, href, ...props }: any) => {
  return (
    <Link
      href={href}
      {...props}
      className="block text-center p-2 w-full rounded-md bg-amber-300 text-lg font-medium"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
