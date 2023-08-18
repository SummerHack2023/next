"use client";

import { useState } from "react";
import Link from "next/link";
import SignInBtn from '../components/SignInBtn'
import "public/css/signup.css";

export default function Signup() {
  const [selected, setSelected] = useState("");

  const departments = require("public/data/department.json");

  const handleSelectOption = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div className="signup-background" >
      <div className="flex-col">
        <form className="signup-box flex-col" action="/api/auth/signup" method="POST">
          <div className="signup-logo">
            <Link href={"/"}>LOGO</Link>
          </div>
          <div className="signup-input flex-c">
            <input name="name" type="text" placeholder="이름" />
          </div>
          <div className="signup-input flex-c">
            <input name="studentId" type="text" placeholder="학번" />
          </div>
          <div className="signup-input flex-c">
            <input name="password" type="password" placeholder="비밀번호" />
          </div>
          <div className="signup-input flex-c">
            <select
              name="department"
              onChange={handleSelectOption}
              value={selected}
              className="signup-selectBox flex-c"
            >
              {departments.map((department) => (
                <option value={department} key={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-c">
            <button type="submit" className="signup-button">
              회원가입
            </button>
          </div>
        </form>
        <div className="signin-box">
          <span className="mr-1">아이디가 있으신가요?</span>
        <SignInBtn /> 
        </div>
      </div>
    </div>
  );
}
