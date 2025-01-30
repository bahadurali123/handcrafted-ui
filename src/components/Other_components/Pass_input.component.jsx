import React, { useId, useState } from "react"
import "../../styles/Others/Input.css"

const PasswordInput = React.forwardRef(function Input({
    label,
    className = '',
    ...props
}, ref) {
    const id = useId();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div>
            {label && <label
                htmlFor={id}
                className="signin-label"
            >
                {label}
            </label>
            }
            <div className="password-container">
                <input
                    type={passwordVisible ? "text" : "password"}
                    className="signin-input"
                    {...props}
                    ref={ref}
                    id={id}
                />
                <span onClick={togglePasswordVisibility} className="password-toggle">
                    {passwordVisible ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
                </span>
            </div>
        </div>
    )
});

export default PasswordInput;