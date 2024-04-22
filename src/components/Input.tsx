import React, { useState } from "react";
import "./Input.css";

interface InputProps {
  type: "text" | "number" | "email" | "tel" | "file";
  placeholder?: string;
  required?: boolean;
  label?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  required = false,
  label,
  value,
  onChange,
}) => {
  const [touched, setTouched] = useState(false);

  const isEmpty = required && touched && value?.trim() === "";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!touched) setTouched(true);
    onChange(event);
  };

  const handleBlur = () => {
    if (!touched) setTouched(true);
  };

  return (
    <div className="input-container">
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className={`input-field ${isEmpty ? "required-empty" : ""}`}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Input;
