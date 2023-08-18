"use client";

import { useState } from "react";
import List from "../components/random/List";
import Modal from "../components/random/Modal";
import "./random.css";

const Random = () => {
  const [modal, setModal] = useState(false);

  const onClickModalOpenBtn = () => {
    setModal(true);
  };

  return (
    <div className="w-full h-full">
      {modal && <Modal />}
      <div
        style={{ paddingTop: "65px", width: "100%", height: "100%" }}
        className="flex items-center justify-center"
      >
        <div className="w-[1000px] h-full">
          <div className="main-contents">
            <div className="random-title flex justify-between">
              <span>랜덤팀원구하기</span>
              <button onClick={onClickModalOpenBtn}>모달창</button>
            </div>
            <div>
              <List />
              <List />
              <List />
              <List />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Random;
