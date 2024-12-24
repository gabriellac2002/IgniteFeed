import { useState } from "react";
import { Comment } from "./Comment";

type PostProps = {
  name: string;
  role: string;
  body: string;
  image: string;
};

export default function Post({ name, body, role, image }: PostProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className=" bg-gray-800 rounded-lg p-10 mb-8">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={image}
            className="rounded-lg border-4 border-gray-800 outline outline-2 outline-green-500"
            style={{ height: `calc(3rem + 8px)`, width: `calc(3rem + 8px)` }}
          />
          <div className="flex flex-col">
            <strong className="mt-4 text-base text-gray-100 mb-1">
              {name}
            </strong>
            <span className="text-sm text-gray-400">{role}</span>
          </div>
        </div>

        <time
          title="12 de dezembro de 2024"
          dateTime="2024-12-09"
          className="text-sm text-gray-400"
        >
          Publicado a 1h
        </time>
      </header>

      <div className="text-gray-300 my-6">{body}</div>

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
}
