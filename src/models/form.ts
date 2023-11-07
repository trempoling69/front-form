export type Form = {
  id: number;
  title: string;
  theme_id: string;
  fields: Field[];
};

export type Field = {
  id: number;
  label: string;
  order: number;
  form_id: number;
  category_id: number;
  field_options: FieldOption[];
};

export type FieldOption = {
  id: number;
  label: string;
  ratio: number;
  field_id: number;
  skill_id: number;
};
