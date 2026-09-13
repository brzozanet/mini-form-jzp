import type { ListProps } from "../types/types";
import "./List.css";

export function List({ data }: ListProps) {
  return (
    <>
      <h1>Lista osób:</h1>
      <ul>
        {data.map((person) => (
          <li key={person.tel} className="person">
            <span className="person-name">
              {person.name} <span className="person-age">({person.age})</span>
            </span>
            <span className="person-tel">{person.tel}</span>
            <span className="person-email">{person.email}</span>
            {person.nip && (
              <span className="person-nip">NIP: {person.nip}</span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
