import BoardList from "../components/board/BoardList";
import { connectDB } from "/util/database.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "public/css/board.css";

export default async function Page() {
  const db = (await connectDB).db("hack");
  let boardList = await db.collection("post").find().toArray()
  boardList = boardList.reverse();
  return (
    <>
      <div style={{ paddingTop: "65px", width: "100%", height: "100%" }}>
        <div className="background flex items-center justify-center">
          <div className="board">
            <div className="board-title">
              <span>게시판</span>
            </div>
            <Link href="/board/write"
              className="write"
            >
              <span style={{ color: "grey" }}>새 글 작성</span>
              <FontAwesomeIcon icon={faPen} className="modifyBtn" />
            </Link>
            <div className="write-boxes">
              {boardList.map((a, i) => (
                <BoardList
                  key={i}
                  id={a._id.toString()}
                  title={a.title}
                  content={a.content}
                  time={a.time}
                  writer={a.writer}
                  date={a.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}