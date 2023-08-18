"use client";

import Comment from "./Comment";
import CommentInput from "./CommentInput";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Detail = ({ boardList, session }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`/api/commentGet?id=${boardList._id}`)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, [data]);
  return (
    <div style={{ paddingTop: "65px", width: "100%", height: "100%" }}>
      <div className="flex items-center flex-col h-full w-1000">
        <div className="board-title">
          <span>게시판</span>
        </div>
        <div className="detail-contents">
          <div className="글">
            <div className="프로필 flex flex">
              <div className="사진">
                <Image
                  src="https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png"
                  width={50}
                  height={50}
                  alt="profile"
                />
              </div>
              <div className="사진오른쪽 flex flex-col justify-center">
                <div className="이름">{boardList.writer}</div>
                <div
                  className="날짜"
                  style={{ color: "#a6a6a6", fontSize: "12px" }}
                >
                  {boardList.date}
                </div>
              </div>
              {session.user.name === boardList.writer ? (
                <div className="btns">
                  <Link
                    href={`/board/edit/${boardList._id}`}
                    className="mr-1 decoration-[#d6d6d6]"
                  >
                    수정
                  </Link>
                  <button
                    className="text-[#000000]"
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
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="본문">
              <div className="text-2xl mb-1">{boardList.title}</div>
              <div>{boardList.content}</div>
            </div>
          </div>
          {data.map((data, i) => (
            <Comment key={i} data={data} session={session}/>
          ))}
          <CommentInput boardListId={boardList._id} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
