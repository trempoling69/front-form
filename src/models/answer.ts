export type AnswerResponse = {
  status: number;
  answer: Answer;
  celebrity: Celebrity;
};

export type Answer = {
  id: number;
  profil: string;
  form_id: number;
  answer_raw: number;
  user_id: number;
};

export type Celebrity = {
  id: number;
  name: string;
  description: string;
  theme_id: number;
  profil: string;
  photo: string;
};
