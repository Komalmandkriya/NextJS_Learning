"use client";
import Link from "next/link";
import "./page.css"
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  const navigateTo = (page: string) => {
    router.push(page)
  }
  return (
    <div className="mainContainer">
      <h1 style={{ fontWeight: 700, textAlign: "center", fontSize: "25px" }}>Home Page</h1>
      <br />
      <h3 style={{ fontWeight: 700 }}>By Link</h3>
      <div className="bg-blue-500 text-white p-4 rounded shadow-md flex flex-row gap-4">
        <Link href={"/login"}>Go to Login</Link>
        <Link href={"/about"}>Go to About</Link>
      </div>
      <br /><br />
      <h3 style={{ fontWeight: 700 }}>By Navigation</h3>
      <div className="bg-blue-500 text-white p-4 rounded shadow-md flex flex-row gap-4">
        <button onClick={() => navigateTo("/login")} >Login</button>
        <button onClick={() => navigateTo("/about")}>About</button>
      </div>
    </div>
  );
}
