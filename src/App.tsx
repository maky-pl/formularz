import React, { useState } from "react";
import Checkbox from "./components/Checkbox";
import DynamicForm from "./components/DynamicForm";

import "./App.css";

const App: React.FC = () => {
  const [fields, setFields] = useState({
    name: false,
    surname: false,
    email: false,
    phone: false,
    cv: false,
    comments: false,
    additionalInfo: false,
  });
  const [showForm, setShowForm] = useState(false);
  const [theme, setTheme] = useState("form-theme-default");

  const handleChange = (field: string) => (value: boolean) => {
    setFields((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <div className="checkbox-container">
        <Checkbox
          label="Imię"
          checked={fields.name}
          onChange={handleChange("name")}
        />
        <Checkbox
          label="Nazwisko"
          checked={fields.surname}
          onChange={handleChange("surname")}
        />
        <Checkbox
          label="Email"
          checked={fields.email}
          onChange={handleChange("email")}
        />
        <Checkbox
          label="Telefon"
          checked={fields.phone}
          onChange={handleChange("phone")}
        />
        <Checkbox
          label="CV"
          checked={fields.cv}
          onChange={handleChange("cv")}
        />
        <Checkbox
          label="Informacje"
          checked={fields.comments}
          onChange={handleChange("comments")}
        />

        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="form-theme-default">Default Theme</option>
          <option value="form-theme-dark">Dark Theme</option>
          <option value="form-theme-fancy">Fancy Theme</option>
        </select>
        <button onClick={() => setShowForm(true)}>Generuj Formularz</button>
      </div>

      {showForm && (
        <div className={theme}>
          <DynamicForm fields={fields} />
        </div>
      )}
    </div>
  );
};

export default App;
