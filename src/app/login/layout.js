import Link from "next/link";
import React from "react";
const Layout = ({ children }) => {
  return (
    <div>
      <h1 style={{ fontWeight: 700, textAlign: "center", fontSize: "25px" }}>
        Login
      </h1>
      <ul className="bg-blue-500 text-white p-4 rounded shadow-md flex flex-row gap-4">
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/login/loginStudent"}>Student Login</Link>
        </li>
        <li>
          <Link href={"/login/loginCollege"}>College Login</Link>
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
