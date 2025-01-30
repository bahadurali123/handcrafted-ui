import React, { useId } from "react";
import "../../styles/Others/Checkbox.css"; // Importing styles

const Checkbox = React.forwardRef(function Checkbox(
  { label, className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className={`checkbox-wrapper ${className}`}>
      <input
        type="checkbox"
        className="signin-checkbox"
        {...props}
        ref={ref}
        id={id}
      />
      {label && (
        <label htmlFor={id} className="signin-checkbox-label">
          {label}
        </label>
      )}
    </div>
  );
});

export default Checkbox;
