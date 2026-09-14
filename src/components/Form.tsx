import { useState } from "react";
import "./Form.css";

export function Form({ onAddPerson }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [isInvoiceRequired, setIsInvoiceRequired] = useState(false);
  const [nip, setNip] = useState("");

  // const handleNameInput

  const hanndleInvoiceCheckToggle = () => {
    setIsInvoiceRequired((prevState) => !prevState);
  };

  return (
    <form autoComplete="off">
      <label htmlFor="name">Imię</label>
      <input id="name" />

      <label htmlFor="surname">Nazwisko</label>
      <input id="surname" />

      <label htmlFor="age">Wiek</label>
      <input id="age" type="number" />

      <label htmlFor="tel">Telefon</label>
      <input id="tel" type="tel" />

      <label htmlFor="email">E-mail</label>
      <input id="email" type="email" />

      <label htmlFor="isInvoiceRequired">
        <input
          id="isInvoiceRequired"
          type="checkbox"
          placeholder="Podaj NIP"
          checked={isInvoiceRequired}
          onChange={hanndleInvoiceCheckToggle}
        />
        Faktura VAT
      </label>
      {isInvoiceRequired && <input id="nip" />}

      <div className="footer">
        <button>Dodaj</button>
      </div>
    </form>
  );
}
