import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, className = "", ...attributes }: Props) {
  return (
    <button
      {...attributes}
      className={`rounded-full p-2 hover:bg-white/10 active:bg-white/30 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
