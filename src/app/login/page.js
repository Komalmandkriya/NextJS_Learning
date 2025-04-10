"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  const navigateTo = (page) => {
    router.push(page);
  };
  return (
    <div>
      <br />
      <h1>Login Page</h1>
    </div>
  );
};

export default Login;
