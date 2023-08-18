"use client";

import { signIn } from "next-auth/react";
import styled from "styled-components";

const SignInBtn = () => {
  return (
    <button className="text-[blue]"
      onClick={() => {
        signIn();
      }}
    >
      로그인
    </button>
  );
};

const Button = styled.button`
  width: 78px;
  height: 40px;
  padding: 7px 12px;
  border: 1px solid #bbb;
  border-radius: 5px;
  font-size: 15px;
  text-align: center;
  color: white;
  background-color: #b2d7fc;
`;

export default SignInBtn;
