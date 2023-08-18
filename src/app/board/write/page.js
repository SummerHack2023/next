import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import dayjs from "dayjs";
import { getServerSession } from "next-auth";
import "public/css/write.css";

const Write = async () => {
  let date = new Date();
  date = dayjs(date).format("YYYY.MM.DD")
  const session = await getServerSession(authOptions);
  return (
    <div
      style={{
        paddingTop: "65px",
        width: "100%",
        height: "100%",
        background: "#f1f1f1",
      }}
      className="flex items-center justify-center"
    >
      <form
        action="/api/boardPost"
        method="POST"
        className="flex items-center flex-col write-background"
      >
        <div className="title-box">
          <input
            type="text"
            name="title"
            className="title_txt"
            placeholder="제목"
          />
        </div>
        <div className="content-box">
          <textarea
            name="content"
            className="content_txt"
            placeholder="내용을 입력하세요."
          ></textarea>
        </div>
        <input
          style={{ display: "none" }}
          name="writer"
          defaultValue={session.user.name}
        />
        <input
          style={{ display: "none" }}
          name="date"
          defaultValue={date}
        />
        <button type="submit" className="submitBtn">
          발행
        </button>
      </form>
    </div>
  );
};

export default Write;
