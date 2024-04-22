import React, { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Checkbox from "./Checkbox";

import "./DynamicForm.css";

interface DynamicFormProps {
  fields: {
    name: boolean;
    surname: boolean;
    email: boolean;
    phone: boolean;
    cv: boolean;
    comments: boolean;
    additionalInfo: boolean;
  };
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    cv: "",
    comments: "",
  });

  const [agreementChecked, setAgreementChecked] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleInputChange =
    (field: keyof typeof formData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [field]: event.target.value });
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Dziękujemy za aplikację do naszej firmy ${formData.name} ${formData.surname}`;
    setSubmissionMessage(message);
    console.log("Form data:", formData);
  };

  return (
    <>
      <form className="dynamic-form" onSubmit={handleSubmit}>
        {fields.name && (
          <Input
            type="text"
            label="Imię"
            placeholder="Podaj imię"
            required
            value={formData.name}
            onChange={handleInputChange("name")}
          />
        )}
        {fields.surname && (
          <Input
            type="text"
            label="Nazwisko"
            placeholder="Podaj nazwisko"
            required
            value={formData.surname}
            onChange={handleInputChange("surname")}
          />
        )}
        {fields.email && (
          <Input
            type="email"
            label="Email"
            placeholder="Podaj Email"
            required
            value={formData.email}
            onChange={handleInputChange("email")}
          />
        )}
        {fields.phone && (
          <Input
            type="text"
            label="Telefon"
            placeholder="Numer kontaktowy"
            required
            value={formData.phone}
            onChange={handleInputChange("phone")}
          />
        )}
        {fields.cv && (
          <Input
            type="file"
            label="Wgraj CV"
            placeholder="CV"
            required
            value={formData.cv}
            onChange={handleInputChange("cv")}
          />
        )}
        {fields.comments && (
          <TextArea
            value={formData.comments}
            placeholder="Wiadomość do pracodawcy"
            onChange={(value) => handleInputChange("comments")(value)}
          />
        )}
        <div className="additional-info">
          <div className="info-layout">
            <Checkbox
              label="Wyrażam zgodę na przetwarzanie danych w procesie rekrutacji."
              checked={agreementChecked}
              onChange={() => setAgreementChecked(!agreementChecked)}
            />
          </div>
        </div>

        <button type="submit" disabled={!agreementChecked}>
          Aplikuj
        </button>
      </form>
      {submissionMessage && (
        <h3 className="podsumowanie">{submissionMessage}</h3>
      )}
    </>
  );
};

export default DynamicForm;
