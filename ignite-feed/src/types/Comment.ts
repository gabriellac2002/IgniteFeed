export type Comment = {
  id: number;
  author: {
    avatar_url: string;
    name: string;
    role: string;
  };
  content: string;
  published_at: string;
};
