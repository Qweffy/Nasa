import React from "react";
import { Link } from "react-router-dom";
import NavCss from "./NavBar.module.css";
import mars from "../img/mars.gif";

export default function NavBar() {
  return (
    <div>
      <div className={NavCss.linkmars}>
        <ul>
          <Link className="link" to="marsweather">
            <img className={NavCss.mars} src={mars} alt="mars gif"></img>
          </Link>
        </ul>
      </div>
    </div>
  );
}
