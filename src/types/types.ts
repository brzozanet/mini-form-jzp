export type People = {
  name: string;
  surname: string;
  age: number;
  tel: string;
  email: string;
  nip?: string;
};

export type ListProps = { data: People[] };
