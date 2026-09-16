export type People = {
  name: string;
  surname: string;
  age: number;
  tel: string;
  email: string;
  nip?: string;
};

export type ListProps = { data: People[] };

export type FormState = {
  name: string;
  surname: string;
  age: string;
  tel: string;
  email: string;
  isInvoiceRequired: boolean;
  nip: string;
};
