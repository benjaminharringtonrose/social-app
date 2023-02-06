interface IContent {
  id: string;
  avatarUrl?: string;
  name: string;
  timestamp: string;
  caption?: string;
  content?: string[];
  likes?: number;
  comments?: number;
}

export enum AuthEnum {
  Authenticated = 'Authenticated',
  Unauthenticated = 'Unauthenticated',
  None = 'None'
}