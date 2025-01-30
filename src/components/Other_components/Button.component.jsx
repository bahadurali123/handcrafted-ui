// import React from "react";
import "../../styles/Others/Button.css"; // Import the CSS file for styles

function Button({
  children,
  type = "button",
  customStyles = {},
  ...props
}) {
  return (
    <button
      type={type}
      //   className={`btn`}
      className="btn"
      style={{ ...customStyles }}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
