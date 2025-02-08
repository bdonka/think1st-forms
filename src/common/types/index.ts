export type Holiday = {
  country: string;
  iso: string;
  year: number;
  date: string;
  day: string;
  name: string;
  type: string;
};

export type FormPayload = {
  firstname: string;
  surname: string;
  age: number;
  attachment: string;
  date: string;
};

export type Field = {
  value: string | number;
  validators: Function[];
  dirty: boolean;
};
