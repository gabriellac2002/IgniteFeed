import { useState } from "react";
import { Avatar } from "./Avatar";
import { Post as PostType } from "../types/Post";
import { Comment as CommentType } from "../types/Comment";
import { Comment } from "./Comment";

type Props = {
  post: PostType;
};

const Post: React.FC<Props> = ({ post }) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [newComment, setNewComment] = useState("");

  function handleNewCommentInvalid(
    event: React.InvalidEvent<HTMLTextAreaElement>
  ) {
    event.target.setCustomValidity(
      "Por favor, preencha o campo de comentário."
    );
  }

  function handleCreateComment(event: React.FormEvent) {
    event.preventDefault();
    console.log("handleCreateComment called");

    const newCommentObject: CommentType = {
      id: comments.length + 1,
      author: {
        avatar_url: "https://randomuser.me/api/portraits/men/1.jpg", // URL de avatar genérica
        name: "Random User",
        role: "Commenter",
      },
      content: newComment,
      published_at: new Date().toISOString(),
    };

    console.log("New comment object:", newCommentObject);

    setComments([...comments, newCommentObject]);
    setNewComment("");
  }

  function handleDeleteComment(commentId: number) {
    console.log("handleDeleteComment called");
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  }

  return (
    <div className="bg-gray-800 rounded-lg p-10 mb-8" key={post.id}>
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
          className="text-sm text-gray-400"
        >
          {new Date(post.published_at).toLocaleDateString("pt-BR")}
        </time>
      </header>

      <div className="mt-6 text-gray-100">{post.content}</div>

      <form
        className="w-full mt-6 pt-6 border-t-2 border-t-gray-600"
        onSubmit={handleCreateComment}
      >
        <strong className="text-gray-100">Deixe seu feedback</strong>

        <textarea
          className="w-full bg-gray-900 border-0 resize-none h-24 p-4 rounded-lg text-gray-100 mt-4"
          placeholder="Deixe um comentario"
          value={newComment}
          onChange={(e) => {
            e.target.setCustomValidity("");
            setNewComment(e.target.value);
          }}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <button
          type="submit"
          className={`py-4 px-6 mt-4 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-400 transition-colors duration-100 ${
            !newComment ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={!newComment}
        >
          Publicar
        </button>
      </form>

      <div className="mt-8">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            handleDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Post;
