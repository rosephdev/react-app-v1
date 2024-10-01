import React, { ReactNode } from "react";

// Alert Property
interface AlertProps {
  // text: string; // simple text props
  // children: string; // passing children props to a component
  children: ReactNode; // it allows additional html tags
}
const Alert = ({ children }: AlertProps) => {
  return (
    <div
      className="container-fluid col-md-10 col-lg-12 alert alert-primary"
      role="alert"
    >
      {children} <span>HBD!</span>
    </div>
  );
};

export default Alert;
