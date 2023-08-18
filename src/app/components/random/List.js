import styles from "./List.module.css";

const List = () => {
  return (
    <div className={`${styles.list} text-[15px] flex justify-between items-center`}>
      <div>
        <div className="font-medium">과목명 / 분반</div>
        <div className="text-[13px]">교수님</div>
        <div className={`${styles.deadline}`}>2023.08.20</div>
      </div>
      <div className="flex">
        <div className="mr-[10px]">참여인원 / 구인인원</div>
        <div>참가하기</div>
      </div>
    </div>
  );
};

export default List;
