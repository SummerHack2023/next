import styles from "public/css/List.module.css";

const List = ({key, classname, classnumber, professor, deadline, recruits, participants}) => {
  return (
    <div className={`${styles.list} text-[15px] flex justify-between items-center`}>
      <div>
        <div className="font-medium">{`${classname} / ${classnumber}`}</div>
        <div className="text-[13px]">{professor}</div>
        <div className={`${styles.deadline}`}>{deadline}</div>
      </div>
      <div className="flex">
        <div className="mr-[10px]">{`${participants} / ${recruits}`}</div>
        <div>참가하기</div>
      </div>
    </div>
  );
};

export default List;
