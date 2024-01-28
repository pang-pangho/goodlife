import React, { useState, useEffect } from "react";
import "../App.css";
import goodlife from "../img/자기관리.png";

const easeOutExpo = (t) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const useCountUp = (num, duration) => {
  const [count, setCount] = useState(0);
  const frameRate = 1000 / 60;
  const totalFrame = Math.round(duration / frameRate);

  useEffect(() => {
    let currentNumber = 0;
    const counter = setInterval(() => {
      const progressRate = easeOutExpo(++currentNumber / totalFrame);
      setCount(Math.round((num - 0.2) * progressRate)); // 수정된 부분

      // 진행 완료시 interval 해제
      if (progressRate === 1) {
        clearInterval(counter);
      }
    }, frameRate);
    return () => clearInterval(counter); // 컴포넌트가 언마운트되면 타이머 정리
  }, [num, duration]);

  return count;
};

function Center() {
  // 각 비율 값들을 상태로 관리
  const ageRatio = useCountUp(60, 2000);
  const exerciseRatio = useCountUp(69, 2000);
  const studyRatio = useCountUp(68, 2000);

  useEffect(() => {
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      const centerContainer = document.querySelector(".center_container");
      if (window.scrollY >= 280) {
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
    <div className="center_container">
      <div className="center_content_text">
        나 빼고 다 하는 것 같은 <span className="green_bar">"갓생"</span>,
        <br />
        어려워보이지만 <span className="green_bar">"루틴"</span>을 만들면
        <br />
        변화가 시작되고 <span className="green_bar">"새 삶"</span>이 시작됩니다.
      </div>
      <div className="percent">
        <div className="percent_text">
          20대 갓생 비율 <span className="yellow_bar">{ageRatio}%</span>
          <br />
          <br />
          운동 선호 비율 <span className="yellow_bar">{exerciseRatio}%</span>
          <br />
          <br />
          공부 갓생 비율 <span className="yellow_bar">{studyRatio}%</span>
          <br />
        </div>
        <div className="percent_img">
          <img src={goodlife} alt="goodlife"></img>
        </div>
      </div>
    </div>
  );
}

export default Center;
