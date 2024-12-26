export type Post = {
  id: number;
  author: {
    avatar_url: string;
    name: string;
    role: string;
  };
  published_at: string;
  content: string;
};
