import React from "react";
import { Link } from "react-router-dom";
import HomeCss from "./Home.module.css";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <div className={HomeCss}>
      <NavBar />
    </div>
  );
}
