export type People = {
  name: string;
  surname: string;
  age: number;
  tel: string;
  email: string;
  nip?: string;
};

export type ListProps = { data: People[] };

export type FormProps = { onAddPerson: (param: People) => void };

export type FormState = {
  name: string;
  surname: string;
  age: number;
  tel: string;
  email: string;
  isInvoiceRequired: boolean;
  nip: string;
};
