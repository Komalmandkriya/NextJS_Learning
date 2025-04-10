import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h1 style={{ fontWeight: 700, textAlign: "center", fontSize: "25px" }}>
        About
      </h1>
      <ul className="bg-blue-500 text-white p-4 rounded shadow-md flex flex-row gap-4">
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/about/aboutStudent"}>About Student</Link>
        </li>
        <li>
          <Link href={"/about/aboutCollege"}>About College</Link>
        </li>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
