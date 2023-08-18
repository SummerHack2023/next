"use client";

import { useEffect, useState } from "react";
import List from "../random/List";
import Modal from "../random/Modal";
import 'public/css/random.css';

const RandomList = ({randomList, session}) => {
  const [list, setList] = useState(randomList)
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  return (
    <div className="w-full h-full">
      {modal && <Modal closeModal={closeModal} />}
      <div
        style={{ paddingTop: "65px", width: "100%", height: "100%" }}
        className="flex items-center justify-center"
      >
        <div className="w-[1000px] h-full">
          <div className="main-contents">
            <div className="random-title flex justify-between">
              <span>랜덤팀원구하기</span>
              <button onClick={openModal}>+</button>
            </div>
            <div>
             {list.map((a, i)=>(
              <List key={i}
               classname={a.classname}
               classnumber={a.classnumber}
               professor={a.professor}
               deadline={a.deadline}
               recruits={a.recruits}
               participants={a.participants}
              />
             ))
             }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomList;
