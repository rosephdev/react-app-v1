import React from "react";

interface ButtonProps {
  children: string; // children prop passed down to the App component
  // color?: string; // adding ? is optional
  color?: "primary" | "secondary" | "danger" | "warning"; // adding ? is optional | adding string literal for other color options
  onClick: () => void; // triggers a click on a button
}

const Button = ({ children, color, onClick }: ButtonProps) => {
  return (
    <button className={`btn btn-lg btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;