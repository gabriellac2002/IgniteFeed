import { Post } from "../types/Post";

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatar_url: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      role: "Developer",
    },
    published_at: "2024-12-20",
    content:
      "Just finished a major project at work! 🚀 Feeling accomplished and ready for the next challenge. #developerlife #coding",
  },
  {
    id: 2,
    author: {
      avatar_url: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      role: "Designer",
    },
    published_at: "2024-12-21",
    content:
      "Exploring new design trends and techniques today. 🎨✨ It's amazing how much creativity can be sparked by a simple idea. #designinspiration #creativity",
  },
  {
    id: 3,
    author: {
      avatar_url: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Alice Johnson",
      role: "Manager",
    },
    published_at: "2024-12-03",
    content:
      "Had a productive meeting with the team today. 💼📊 Excited about the new strategies we're implementing. #management #teamwork",
  },
];

export default posts;
