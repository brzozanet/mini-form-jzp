import { useState } from "react";
import type { FormProps, FormState } from "../types/types";
import "./Form.css";

export function Form({ onAddPerson }: FormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    surname: "",
    age: "",
    tel: "",
    email: "",
    isInvoiceRequired: false,
    nip: "",
  });

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
    setForm((prevFormState) => ({
      ...prevFormState,
      [event.target.id]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  };

  const handleFormSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddPerson({ ...form, age: Number(form.age) });
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <label htmlFor="name">Imię</label>
      <input
        id="name"
        value={form.name}
        // onChange={(e) => console.log(e)}
        onChange={handleInputChange}
      />

      <label htmlFor="surname">Nazwisko</label>
      <input id="surname" value={form.surname} onChange={handleInputChange} />

      <label htmlFor="age">Wiek</label>
      <input
        id="age"
        type="number"
        value={form.age}
        onChange={handleInputChange}
      />

      <label htmlFor="tel">Telefon</label>
      <input
        id="tel"
        type="tel"
        value={form.tel}
        onChange={handleInputChange}
      />

      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        type="email"
        value={form.email}
        onChange={handleInputChange}
      />

      <label htmlFor="isInvoiceRequired">
        <input
          id="isInvoiceRequired"
          type="checkbox"
          placeholder="Podaj NIP"
          checked={form.isInvoiceRequired}
          onChange={handleInputChange}
        />
        Faktura VAT
      </label>
      <input id="nip" value={form.nip} onChange={handleInputChange} />

      <div className="footer">
        <button>Dodaj</button>
      </div>
    </form>
  );
}
