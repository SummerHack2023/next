import Image from "next/image";
import styles from "public/css/Comment.module.css";

const Comment = ({ data, session }) => {
  return (
    <div className={`${styles.comment} relative`}>
      <div className="flex items-center mb-1">
        <Image
          src="https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png"
          width={25}
          height={25}
          alt="profile"
        />
        <div className={`${styles.commentWriter}`}>{data.author}</div>
        {session.user.name === data.author ? (
          <button
            className={`${styles.deleteBtn}`}
            onClick={async () => {
              try {
                const response = await fetch("/api/boardDelete", {
                  method: "DELETE",
                  body: boardList._id,
                }).then((response) => {
                  if (response.status === 302) {
                    window.location.href = "/board";
                  } else {
                    console.log("삭제 실패");
                  }
                });
              } catch (error) {
                console.log("fetch error", error);
              }
            }}
          >
            삭제
          </button>
        ) : (
          ""
        )}
      </div>
      <div className={`${styles.commentContent}`}>{data.content}</div>
      <div style={{ color: "#a6a6a6", fontSize: "12px" }}>{data.date}</div>
    </div>
  );
};

export default Comment;
