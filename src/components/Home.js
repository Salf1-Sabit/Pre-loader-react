import React, { useEffect, useRef, useState } from "react";
import "./Home.css";

import { Textillate } from "textillate-react";
import { gsap, Power3, Power1 } from "gsap";

const Home = () => {
  let TL = new gsap.timeline();

  const [textillateController1, setTextillateController1] = useState({});
  let progressItem1 = useRef(null);
  let progressItem2 = useRef(null);
  let progressItem3 = useRef(null);
  let progressItem4 = useRef(null);
  let loaderPage = useRef(null);

  useEffect(() => {
    TL.from(progressItem4, 1, {
      y: "100%",
      opacity: 0,
      ease: Power3.easeIn(),
    });
    TL.to(progressItem4, 1, {
      y: "-100%",
      opacity: 0,
    });
    TL.from(progressItem3, 1, {
      y: "100%",
      opacity: 0,
      ease: Power3.easeIn(),
      delay: -0.7,
    });
    TL.to(progressItem3, 1, {
      y: "-100%",
      opacity: 0,
    });
    TL.from(progressItem2, 1, {
      y: "100%",
      opacity: 0,
      ease: Power3.easeIn(),
      delay: -0.7,
    });
    TL.to(progressItem2, 1, {
      y: "-100%",
      opacity: 0,
    });
    TL.from(progressItem1, 1, {
      y: "100%",
      opacity: 0,
      ease: Power3.easeIn(),
      delay: -0.7,
    });
    TL.to(loaderPage, 0.6, {
      y: "-100%",
    });
  });

  return (
    <div>
      <main>
        <div
          ref={(el) => {
            loaderPage = el;
          }}
          className="loader-page"
        >
          <div className="developed-by">
            <h1>Developed by</h1>
            <h1>Salfi sabit &copy; 2023</h1>
          </div>
          <div className="loading-progress">
            <div className="progress-items-box4">
              <h1
                ref={(el) => {
                  progressItem1 = el;
                }}
                className="loading-progress-item4"
              >
                100
              </h1>
            </div>

            <div className="progress-items-box3">
              <h1
                ref={(el) => {
                  progressItem2 = el;
                }}
                className="loading-progress-item3"
              >
                75
              </h1>
            </div>

            <div className="progress-items-box2">
              <h1
                ref={(el) => {
                  progressItem3 = el;
                }}
                className="loading-progress-item2"
              >
                33
              </h1>
            </div>

            <div className="progress-items-box1">
              <h1
                ref={(el) => {
                  progressItem4 = el;
                }}
                className="loading-progress-item1"
              >
                00
              </h1>
            </div>
          </div>
        </div>
        <div className="landing-page1"></div>
        <div className="landing-page2"></div>
      </main>
    </div>
  );
};

export default Home;
