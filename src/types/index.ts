export type SingleOrArray<T> = T | T[];

export enum AuthEnum {
  Authenticated = 'Authenticated',
  Unauthenticated = 'Unauthenticated',
  None = 'None'
}

export interface IContent {
  id: string;
  avatarUrl?: string;
  name: string;
  timestamp: string;
  caption?: string;
  content?: SingleOrArray<string>;
  likes?: number;
  comments?: number;
}

export interface ILoginFormProps {
  email: string;
  password: string;
}

export interface ISignUpFormProps {
  email: string;
  password: string;
}
