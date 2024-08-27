import React from "react";

interface TitleProps extends React.HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children, ...props }) => {
  return (
    <h2 className="text-xl font-medium" {...props}>
      {children}
    </h2>
  );
};

export default Title;
