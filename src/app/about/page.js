"use client";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter();
  const navigateTo = (page) => {
    router.push(page);
  };
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
