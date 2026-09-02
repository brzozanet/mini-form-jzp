export type People = {
  name: string;
  age: number;
  tel: string;
  email: string;
  nip?: string;
};

export type ListProps = {
  data: People[];
};

export type FormProps = {
  onAddPerson: (person: People) => void;
};
