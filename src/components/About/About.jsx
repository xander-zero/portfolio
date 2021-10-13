import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            className="about-image"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          It is a long established fact a render will be readabloe content.
        </p>
        <p className="abou-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          labore distinctio laboriosam ipsa sit dolorem at id velit, explicabo
          ad sunt ducimus dicta illo soluta, ratione deserunt ex! Quod,
          consequatur?
        </p>
        <div className="about-award">
          <img
            src="https://img.pikbest.com/05/75/08/62ppIkbEsTD6Z.jpg-0.jpg!bw700"
            className="about-award-image"
          />
          <div className="about-award-texts">
            <h4 className="about-award-title">
              International Design Award 2021{" "}
            </h4>
            <p className="about-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              pariatur, perferendis laudantium beatae quod reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
