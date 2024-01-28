import React, { useState, useEffect } from "react";
import "../App.css";
import chlangers from "../img/챌린저스.png";
import grow from "../img/그로우.jpg";
function Whatkind() {
  useEffect(() => {
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      const centerContainer = document.querySelector(".what_container");
      if (window.scrollY >= 1400) {
        centerContainer.classList.add("fade-in");
      } else {
        centerContainer.classList.remove("fade-in");
      }
    };
    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="what_container">
      <div className="what_help_title">
        시작을 도와줄 <span className="skyblue_bar">어플</span>
      </div>
      <div className="what_chlngers">
        1. 챌린저스 <br />
        <span className="what_chlangers_small">
          챌린저스는 건강습관 형성을 위해 돈을 걸고 목표를 달성하는 앱으로,
          <br />
          참가자는 목표를 인증할 때마다 참가비가 환급되며, 85% 이상을
          <br /> 달성하면 참가비가 전액 환급되고 추가 상금도 받을 수 있습니다.
          함께
          <br /> 하는 사람들과의 동기부여를 통해 목표를 달성하는데 도움을
          줍니다.
        </span>
        <img className="chlangers_img" src={chlangers}></img>
      </div>

      <div className="what_grow">
        2. 그로우 <br />
        <span className="what_grow_small">
          그로우는 자기관리를 위한 모두의 성장관리 앱으로, 목표 달성을 돕는 Big
          Shot 시스템을 통해 작은 성취를 큰 성취로 이끕니다. 그룹 챌린지를 통해
          함께하는 동기부여와 일상 속 소중한 순간을 기록하여 건강한 성장습관을
          형성합니다. 끈기 있게 목표를 실천하고 성장하는 즐거움을 함께 누릴 수
          있습니다.
        </span>
        <img className="grow_img" src={grow}></img>
      </div>
    </div>
  );
}
export default Whatkind;
