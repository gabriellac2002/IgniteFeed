import { useState } from "react";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { Post as PostType } from "../types/Post";

type Props = {
  post: PostType;
};

const Post: React.FC<Props> = ({ post }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className=" bg-gray-800 rounded-lg p-10 mb-8" key={post.id}>
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar src={post.author.avatar_url} hasBorder />
          <div className="flex flex-col">
            <strong className="mt-4 text-base text-gray-100 mb-1">
              {post.author.name}
            </strong>
            <span className="text-sm text-gray-400">{post.author.role}</span>
          </div>
        </div>

        <time
          title={new Date(post.published_at).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
          dateTime={post.published_at}
          className="text-sm text-gray-400"
        >
          Publicado a{" "}
          {Math.floor(
            (new Date().getTime() - new Date(post.published_at).getTime()) /
              (1000 * 60 * 60 * 24)
          )}{" "}
          dias atrás
        </time>
      </header>

      <div className="text-gray-300 my-6">{post.content}</div>

      <form className="w-full mt-6 pt-6 border-t-2 border-t-gray-600">
        <strong className="text-gray-100">Deixe seu feedback</strong>

        <textarea
          className="w-full bg-gray-900 border-0 resize-none h-24 p-4 rounded-lg text-gray-100 mt-4"
          placeholder="Deixe um comentario"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {isFocused && (
          <button
            type="submit"
            className="py-4 px-6 mt-4 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-400 transition-colors duration-100"
          >
            Publicar
          </button>
        )}
      </form>

      <div className="mt-8">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default Post;
