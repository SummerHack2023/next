import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import styles from "public/css/Modal.module.css";

const Modal = ({ closeModal }) => {
  return (
    <div className={`${styles.background} flex items-center justify-center`}>
      <form
        action="/api/randomPost"
        method="POST"
        className={`${styles.modal} `}
      >
        <div onClick={closeModal}>
          <FontAwesomeIcon icon={faX} className={`${styles.outBtn}`} />
        </div>
        <span className={`${styles.title}`}>과목명</span>
        <input
          type="text"
          className={`${styles.input}`}
          name="classname"
          autoFocus
        />
        <span className={`${styles.title}`}>분반</span>
        <input
          type="text"
          className={`${styles.input}`}
          name="classnumber"
          placeholder="001"
        />
        <span className={`${styles.title}`}>담당교수</span>
        <input
          type="text"
          className={`${styles.input}`}
          placeholder="OOO교수님"
          name="professor"
        />
        <span className={`${styles.title}`}>마감일</span>
        <input
          type="text"
          className={`${styles.input}`}
          name="deadline"
          placeholder="2023.08.19"
        />
        <span className={`${styles.title}`}>모집인원</span>
        <input type="text" className={`${styles.input}`} name="recruits" />
        <input
          type="text"
          className={`${styles.input}`}
          name="participants"
          defaultValue={1}
          style={{ display: "none" }}
        />
        <div className="flex justify-center items-center mt-[25px]">
          <button className={`${styles.submitBtn}`}>추가</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
