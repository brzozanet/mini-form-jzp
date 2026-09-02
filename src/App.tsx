import { useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";
import type { People } from "./types/types";
import "./App.css";

const initialPeople: People[] = [
  {
    name: "Jan Kowalski",
    age: 30,
    tel: "+48555666777",
    email: "jan.kowalski@gmail.com",
    nip: "0000000001",
  },
  {
    name: "Janina Kowalska",
    age: 25,
    tel: "+48333222111",
    email: "janina.kowalska@o2.com",
  },
];

export default function App() {
  const [people, setPeople] = useState<People[]>(initialPeople);

  const addPerson = (person: People) =>
    setPeople((prevPeople) => [...prevPeople, person]);

  return (
    <div className="container">
      <Form onAddPerson={addPerson} />
      <List data={people} />
    </div>
  );
}
