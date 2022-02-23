import React, { useState } from "react";
import styled from "styled-components";
import "bulma/css/bulma.css";
import "../Biography/TimelineBar.css";

const TimelineBar = () => {
  const [show1, setShow1] = useState(false);

  const toggleShow1 = () => {
    setShow1(!show1);
  };
  const [show2, setShow2] = useState(false);

  const toggleShow2 = () => {
    setShow2(!show2);
  };
  const [show3, setShow3] = useState(false);

  const toggleShow3 = () => {
    setShow3(!show3);
  };
  const [show4, setShow4] = useState(false);

  const toggleShow4 = () => {
    setShow4(!show4);
  };
  const [show5, setShow5] = useState(false);

  const toggleShow5 = () => {
    setShow5(!show5);
  };
  const [show6, setShow6] = useState(false);

  const toggleShow6 = () => {
    setShow6(!show6);
  };

  return (
    <Wrapper>
      <div className="timeline-wrapper clearfix">
        <div className="timeline-content-day">
          <div className="timeline-line"></div>
          <div
            className={`timeline-content-item ${show1 ? "active" : ""}`}
            data-timeline="hour-8"
          >
            <button onMouseOver={() => toggleShow1()}>1</button>
            <div className="timeline-content-item-reveal">
              <button onMouseLeave={() => toggleShow1()}>
                <img src="https://picsum.photos/g/300/300" alt="" />
                <span>Lorem Ipsum</span>
              </button>
            </div>
          </div>

          <div
            className={`timeline-content-item ${show2 ? "active" : ""}`}
            data-timeline="hour-9"
          >
            <button onMouseOver={() => toggleShow2()}>2</button>
            <div className="timeline-content-item-reveal">
              <button onMouseLeave={() => toggleShow2()}>
                <img src="https://picsum.photos/g/300/300" alt="" />
                <span>Lorem Ipsum</span>
              </button>
            </div>
          </div>

          <div
            className={`timeline-content-item ${show3 ? "active" : ""}`}
            data-timeline="hour-10"
          >
            <button onMouseOver={() => toggleShow3()}>3</button>
            <div className="timeline-content-item-reveal">
              <button onMouseLeave={() => toggleShow3()}>
                <img src="https://picsum.photos/g/300/300" alt="" />
                <span>Lorem Ipsum</span>
              </button>
            </div>
          </div>

          <div
            className={`timeline-content-item ${show4 ? "active" : ""}`}
            data-timeline="hour-11"
          >
            <button onMouseOver={() => toggleShow4()}>4</button>
            <div className="timeline-content-item-reveal">
              <button onMouseLeave={() => toggleShow4()}>
                <img src="https://picsum.photos/g/300/300" alt="" />
                <span>Lorem Ipsum</span>
              </button>
            </div>
          </div>

          <div
            className={`timeline-content-item ${show5 ? "active" : ""}`}
            data-timeline="hour-12"
          >
            <button onMouseOver={() => toggleShow5()}>5</button>
            <div className="timeline-content-item-reveal">
              <button onMouseLeave={() => toggleShow5()}>
                <img src="https://picsum.photos/g/300/300" alt="" />
                <span>Lorem Ipsum</span>
              </button>
            </div>
          </div>

          <div
            className={`timeline-content-item ${show6 ? "active" : ""}`}
            data-timeline="hour-13"
          >
            <button onMouseOver={() => toggleShow6()}>6</button>
            <div className="timeline-content-item-reveal">
              <button onMouseLeave={() => toggleShow6()}>
                <img src="https://picsum.photos/g/300/300" alt="" />
                <span>Lorem Ipsum</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TimelineBar;

const Wrapper = styled.div`
  width: 100vw;
  height: 15vh;
  background: linear-gradient(to right, #f650a0, #ff9897);
  display: flex;
  align-items: center;
`;
