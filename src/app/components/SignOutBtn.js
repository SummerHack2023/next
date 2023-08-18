'use client'

import { signOut } from "next-auth/react";
import styled from "styled-components";

const SignOutBtn = () => {
  return (
    <Button onClick={handleSignOut}>Logout</Button>
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
  background-color: #bbb;
`;

export default SignOutBtn;

async function handleSignOut() {
  await signOut();
  window.location.href = '/';
}
