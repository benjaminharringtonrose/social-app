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