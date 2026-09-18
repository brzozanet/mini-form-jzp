import { useState } from "react";
import type { ErrorState, FormProps, FormState } from "../types/types";
import "./Form.css";

const NAME_LENGTH = 2;
const SURNAME_LENGTH = 2;
const MIN_AGE = 18;

const initialErrors = {
  name: false,
  surname: false,
  age: false,
  tel: false,
  email: false,
  nip: false,
};

export function Form({ onAddPerson }: FormProps) {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    surname: "",
    age: "",
    tel: "",
    email: "",
    isInvoiceRequired: false,
    nip: "",
  });
  const [errors, setErrors] = useState<ErrorState>(initialErrors);

  // NOTE: not DRY rule
  // const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.type === "text") {
  //     setForm((prevFormState) => ({
  //       ...prevFormState,
  //       [event.target.id]: event.target.value,
  //     }));
  //   }

  //   if (event.target.type === "checkbox") {
  //     setForm((prevFormState) => ({
  //       ...prevFormState,
  //       [event.target.id]: event.target.checked,
  //     }));
  //   }
  // };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormState) => ({
      ...prevFormState,
      [event.target.id]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value.trim(),
    }));
  };

  const validateFieldLength = (
    fieldName: string,
    fieldValue: string,
    correctValue: number,
  ) => {
    if (fieldValue.length < correctValue || fieldValue.includes(".")) {
      setErrors((prevErrorsState) => ({
        ...prevErrorsState,
        [fieldName]: true,
      }));
      throw new Error("Błąd podczas walidacji ⛔");
    } else {
      setErrors((prevErrorsState) => ({
        ...prevErrorsState,
        [fieldName]: false,
      }));
    }
  };

  const validateAge = (fieldValue: number, correctValue: number) => {
    if (fieldValue < correctValue) {
      setErrors((prevErrorsState) => ({ ...prevErrorsState, age: true }));
      throw new Error("Błąd podczas walidacji ⛔");
    } else {
      setErrors((prevErrorsState) => ({ ...prevErrorsState, age: false }));
    }
  };

  const handleFormSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const personToSave = { ...formData, age: Number(formData.age) };
    validateFieldLength("name", personToSave.name, NAME_LENGTH);
    validateFieldLength("surname", personToSave.surname, SURNAME_LENGTH);
    validateAge(personToSave.age, MIN_AGE);

    onAddPerson(personToSave);
    setErrors(initialErrors);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <label htmlFor="name">Imię</label>
      <input
        id="name"
        value={formData.name}
        // onChange={(e) => console.log(e)}
        onChange={handleInputChange}
      />
      {errors.name && (
        <div className="error">
          Imię jest wymagane, minimum {NAME_LENGTH} znaki, bez kropki
        </div>
      )}

      <label htmlFor="surname">Nazwisko</label>
      <input
        id="surname"
        value={formData.surname}
        onChange={handleInputChange}
      />
      {errors.surname && (
        <div className="error">
          Nazwisko jest wymagane, minimum {SURNAME_LENGTH} znaki, bez kropki
        </div>
      )}

      <label htmlFor="age">Wiek</label>
      <input
        id="age"
        type="number"
        value={formData.age}
        onChange={handleInputChange}
      />
      {errors.age && (
        <div className="error">Osoba musi być pełnoletnia (18+)</div>
      )}

      <label htmlFor="tel">Telefon</label>
      <input
        id="tel"
        type="tel"
        value={formData.tel}
        onChange={handleInputChange}
      />

      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
      />

      <label htmlFor="isInvoiceRequired">
        <input
          id="isInvoiceRequired"
          type="checkbox"
          placeholder="Podaj NIP"
          checked={formData.isInvoiceRequired}
          onChange={handleInputChange}
        />
        Faktura VAT
      </label>
      {formData.isInvoiceRequired && (
        <input id="nip" value={formData.nip} onChange={handleInputChange} />
      )}

      <div className="footer">
        <button>Dodaj</button>
      </div>
    </form>
  );
}
