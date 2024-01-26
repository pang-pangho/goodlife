import { Link } from "react-router-dom";
import React from "react";
import "../App.css";
import logo from "../logo.png";
function Nav() {
  return (
    <div>
      <div className="navbar">
        <img className="logo_img" src={logo}></img>
        <Link className="navbarMenu" to="./coordinater">
          갓생플래너
        </Link>
        <Link className="navbarMenu" to="./wise">
          오늘의 명언
        </Link>
        <Link className="navbarMenu" to="./inquiry">
          문의하기
        </Link>
      </div>
    </div>
  );
}
export default Nav;
