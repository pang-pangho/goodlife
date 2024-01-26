import { Link } from "react-router-dom";
import React from "react";
import "../App.css";
import logo from "../logo.png";
import travel_img from "../img/여행.jpg";
import health_img from "../img/헬스.jpg";
import study_img from "../img/공부.jpg";
import "animate.css";
function Intro() {
  return (
    <div className="intro_container">
      <p className="intro_write">
        <span className="fc-blue">갓생</span>, 늦지 않았습니다. <br />
        당신도 <span className="fc-blue">자신만의 루틴</span>을 만들어 보세요!
      </p>
      <div className="intro_img">
        <img
          className="animate__animated animate__fadeInUp health_img"
          src={health_img}
        ></img>
        <img className="travel_img" src={travel_img}></img>
        <img
          className="animate__animated animate__fadeInUp study_img"
          src={study_img}
        ></img>
      </div>
    </div>
  );
}
export default Intro;
