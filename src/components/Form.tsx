import { useState } from "react";
import type { FormProps, FormState } from "../types/types";
import "./Form.css";

export function Form({ onAddPerson }: FormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    surname: "",
    age: 0,
    tel: "",
    email: "",
    isInvoiceRequired: false,
    nip: "",
  });
  const [error, setError] = useState(false);

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
          : event.target.id === "age"
            ? Number(event.target.value)
            : event.target.value,
    }));
  };

  console.log(form);

  const handleFormSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !form.name ||
      !form.surname ||
      form.age < 18 ||
      !form.tel ||
      !form.email
    ) {
      setError(true);
      return;
    }

    onAddPerson(form);
    setError(false);
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
      {error && <div className="error">Imię jest wymagane</div>}

      <label htmlFor="surname">Nazwisko</label>
      <input id="surname" value={form.surname} onChange={handleInputChange} />
      {error && <div className="error">Nazwisko jest wymagane</div>}

      <label htmlFor="age">Wiek</label>
      <input
        id="age"
        type="number"
        value={!form.age ? "" : form.age}
        onChange={handleInputChange}
      />
      {error && <div className="error">Osoba musi być pełnoletnia (18+)</div>}

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
      {form.isInvoiceRequired && (
        <input id="nip" value={form.nip} onChange={handleInputChange} />
      )}

      <div className="footer">
        <button>Dodaj</button>
      </div>
    </form>
  );
}
