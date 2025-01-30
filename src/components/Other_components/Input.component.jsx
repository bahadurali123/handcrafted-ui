import React, { useId } from "react"
import "../../styles/Others/Input.css"

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    customStyles = {},
    ...props
}, ref) {
    const id = useId();
    return (
        <div>
            {label && <label
                htmlFor={id}
                className="signin-label"
            >
                {label}
            </label>
            }
            <input
                type={type}
                className="signin-input"
                style={{ ...customStyles }}
                {...props}
                ref={ref}
                id={id}
            />
        </div>
    )
});

export default Input;