import React from "react";
import HomeCss from "./Home.module.css";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <div className={HomeCss}>
      <NavBar />
    </div>
  );
}
