import { useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";

import "./App.css";
import type { People } from "./types/types";

const initialPeople = [
  {
    name: "Jan",
    surname: "Kowalski",
    age: 30,
    tel: "+48555666777",
    email: "jan.kowalski@gmail.com",
    nip: "0000000001",
  },
  {
    name: "Janina",
    surname: "Kowalska",
    age: 25,
    tel: "+48333222111",
    email: "janina.kowalska@o2.com",
  },
];

function App() {
  const [people, setPeople] = useState<People[]>(initialPeople);

  return (
    <div className="container">
      <Form
        onAddPerson={(person: People) =>
          setPeople((prevPeople) => [...prevPeople, person])
        }
      />
      <List data={people} />
    </div>
  );
}

export default App;
