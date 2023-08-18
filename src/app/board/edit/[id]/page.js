import "public/css/write.css";
import { connectDB } from "/util/database.js";
import { ObjectId } from "mongodb";

const Edit = async (props) => {
  const db = (await connectDB).db("hack");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });
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
        action="/api/boardEdit"
        method="POST"
        className="flex items-center flex-col write-background"
      >
        <div className="title-box">
          <input
            type="text"
            name="title"
            className="title_txt"
            placeholder="제목"
            defaultValue={result.title}
          />
        </div>
        <div className="content-box">
          <textarea
            name="content"
            className="content_txt"
            placeholder="내용을 입력하세요."
            defaultValue={result.content}
          ></textarea>
        </div>
        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        />
        <button type="submit" className="submitBtn">
          발행
        </button>
      </form>
    </div>
  );
};

export default Edit;
