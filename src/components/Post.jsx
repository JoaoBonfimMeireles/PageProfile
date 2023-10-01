import { useState } from "react";
import { Avatar } from "./Avatar";
import style from "./Post.module.css";
import { Comment } from "./comment";

export function Post({ author, publisedAt, content }) {
  const dateTimePublisedAt = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publisedAt);

  const [comments, setComments] = useState(["Post muito bacana, em!"]);

  const [newCommentText, SetNewCommentText] = useState("");

  function handleNewCommentChange() {
    SetNewCommentText(event.target.value)
  }

  function handleCreateNewComment() {
    event.preventDefault();

    //const newCommentText = event

    //console.log (event.target.nameComment.value);
    //const newComment = (event.target.nameComment.value);

    setComments([...comments, newCommentText]);
    SetNewCommentText('')
    //event.target.nameComment.value = "";
  }

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={author.avatarUrl} alt={author.name} />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="2023-07-16 01:18:00" dateTime="2023-07-16 01:18:00">
          {dateTimePublisedAt}
        </time>
      </header>

      <div className={style.content}>
        {content.map((list) => {
          if (list.type === "paragraph") {
            return <p>{list.content}</p>;
          } else if (list.type === "link") {
            return (
              <p>
                <a href="#">{list.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={style.commentForm}>
        <strong>Deixe seu feeback</strong>

        <textarea value={newCommentText} onChange={handleNewCommentChange} name="nameComment" placeholder="Deixei seu comentario" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}
