"use client";

import styles from "public/css/List.module.css";

const List = ({
  _id,
  classname,
  classnumber,
  professor,
  deadline,
  recruits,
  participants,
}) => {
  const intParticipants = parseInt(participants)+1;
  return (
    <div
      className={`${styles.list} text-[15px] flex justify-between items-center`}
    >
      <div>
        <div className="font-medium">{`${classname} / ${classnumber}`}</div>
        <div className="text-[13px]">{professor}</div>
        <div className={`${styles.deadline}`}>{deadline}</div>
      </div>
      <div className="flex">
        <div className="mr-[10px]">{`${participants} / ${recruits}`}</div>
        <button
          onClick={async () => {
            try {
              const response = await fetch("/api/randomEdit", {
                method: "POST",
                body: JSON.stringify({_id: _id, participants: intParticipants.toString()})
              }).then((response) => {
                if (response.status === 200) {
                  window.location.href='/random'
                } else {
                  console.log("참가 실패");
                }
              });
            } catch (error) {
              console.log("fetch error", error);
            }
          }}
        >
          참가하기
        </button>
      </div>
    </div>
  );
};

export default List;
