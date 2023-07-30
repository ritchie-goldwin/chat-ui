import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 my-2 rounded-full bg-cgRed hover:opacity-80 text-textDark"
    >
      {children}
    </button>
  );
}

export default Button;
