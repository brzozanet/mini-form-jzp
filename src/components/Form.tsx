import { useState } from "react";
import type { FormProps } from "../types/types";
import "./Form.css";

export function Form({ onAddPerson }: FormProps) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [isInvoiceRequired, setIsInvoiceRequired] = useState(false);
  const [nip, setNip] = useState("");

  const handleFormSubmit = (event) => {
    console.log(event);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <label htmlFor="name">Imię</label>
      <input id="name" value={name} />

      <label htmlFor="age">Wiek</label>
      <input id="age" type="number" value={age} />

      <label htmlFor="tel">Telefon</label>
      <input id="tel" type="tel" value={tel} />

      <label htmlFor="email">E-mail</label>
      <input id="email" type="email" value={email} />

      <label htmlFor="isInvoiceRequired">
        <input id="isInvoiceRequired" type="checkbox" placeholder="Podaj NIP" />
        Faktura VAT
      </label>
      <input id="nip" value={nip} />

      <div className="footer">
        <button>Dodaj</button>
      </div>
    </form>
  );
}

// (parameter) e: React.SubmitEvent<HTMLFormElement>
