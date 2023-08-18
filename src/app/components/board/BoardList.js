import Link from "next/link";
import "public/css/Post.css";

export default function Post({ key, id, title, content, writer, date }) {
  return (
    <Link href={`/board/${id}`}>
      <div className="write-box">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        <div className="etc flex flex-col">
          <span>{date}</span>
          <span className="name">{writer}</span>
        </div>
      </div>
    </Link>
  );
}
