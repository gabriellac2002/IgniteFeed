import { TbThumbUp, TbTrash } from "react-icons/tb";
import { Avatar } from "./Avatar";
import { Comment as CommentType } from "../types/Comment";
import { useState } from "react";

type Props = {
  comment: CommentType;
  handleDeleteComment: (commentId: number) => void;
};

export const Comment: React.FC<Props> = ({ comment, handleDeleteComment }) => {
  const [likeCount, setLikeCount] = useState(0);

  function onDeleteComment() {
    console.log("handleDeleteComment called");
    handleDeleteComment(comment.id);
  }

  function handleLikeCount() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className="mt-6 flex gap-4">
      <Avatar src={comment.author.avatar_url} />
      <div className="flex flex-1 flex-col">
        <div className="bg-gray-700 rounded-lg p-4">
          <header className="flex items-start justify-between ">
            <div className="flex flex-col">
              <strong className="text-sm leading-6">
                {comment.author.name}
              </strong>
              <time
                title={new Date(comment.published_at).toLocaleDateString(
                  "pt-BR",
                  {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }
                )}
                dateTime={comment.published_at}
                className="text-xs text-gray-400 leading-6"
              >
                {new Date(comment.published_at).toLocaleDateString("pt-BR")}
              </time>
            </div>
            <button
              title="Deletar comentario"
              className="bg-transparent border-none text-gray-400 pointer leading-none rounded-sm hover:text-red-500"
              onClick={onDeleteComment}
            >
              <TbTrash size={24} />
            </button>
          </header>

          <p className="mt-4 text-gray-300">{comment.content}</p>
        </div>

        <footer className="mt-4">
          <button
            className="bg-transparent border-none text-gray-300 flex items-center hover:text-green-300"
            onClick={handleLikeCount}
          >
            <TbThumbUp className="mr-2" />
            Aplaudir{" "}
            <span className="before:content-['•'] before:mx-1">
              {likeCount}
            </span>
          </button>
        </footer>
      </div>
    </div>
  );
};
