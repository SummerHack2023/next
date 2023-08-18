import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import styles from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={`${styles.background} flex items-center justify-center`}>
      <form className={`${styles.modal} `}>
        <div>
        <FontAwesomeIcon icon={faX} className={`${styles.outBtn}`}/>
        </div>
        <span className={`${styles.title}`}>과목명</span>
        <input type="text" className={`${styles.input}`} autoFocus />
        <span className={`${styles.title}`}>분반</span>
        <input type="text" className={`${styles.input}`} placeholder="001" />
        <span className={`${styles.title}`}>담당교수</span>
        <input
          type="text"
          className={`${styles.input}`}
          placeholder="OOO교수님"
        />
        <span className={`${styles.title}`}>마감일</span>
        <input type="text" className={`${styles.input}`} />
        <span className={`${styles.title}`}>모집인원</span>
        <input type="text" className={`${styles.input}`} />
        <div className="flex justify-center items-center mt-[25px]">
          <button className={`${styles.submitBtn}`}>추가</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
