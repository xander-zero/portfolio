import React from "react";
import MeImage from "../../assets/images/undraw_programming_2svr.svg";
import "./intro.css";
const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-i">Hello, My name is </h2>
          <h1 className="intro-name">Mahmoud Ansari </h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">UI/UX Designer</div>
              <div className="intro-title-item">Photographer</div>
              <div className="intro-title-item">Writer</div>
              <div className="intro-title-item">Content Creator</div>
            </div>
          </div>
          <div className="intro-desctiption">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-right-wrapper">
          {/* <div className="intro-bg"></div> */}
          <img src={MeImage} className="intro-image" alt="intro-image" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
