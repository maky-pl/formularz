import React from "react";

import "./TextArea.css";

interface TextAreaProps {
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="input-container">
      <label className="input-label">Dodatkowe informacje</label>
      <textarea
        placeholder={placeholder}
        className="textarea-field"
        value={value}
        onChange={onChange}
        rows={6}
      />
    </div>
  );
};

export default TextArea;
