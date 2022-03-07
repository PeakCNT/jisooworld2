import React, { useState } from "react";
import styled from "styled-components";
import "bulma/css/bulma.css";
import "../Biography/TimelineBar.css";

const TimelineBar = ({ passIdtoparent }) => {
  const [show, setShow] = useState(false);

  const changeID = (index) => {
    passIdtoparent(index);
  };

  const toggleShow = (index) => {
    setShow({ ...show, [index]: !show[index] });
  };

  return (
    <Wrapper>
      <div className="timeline-wrapper clearfix">
        <div className="timeline-content-day">
          <div className="timeline-line"></div>
          <div className={`timeline-content-item ${show[1] ? "active" : ""}`}>
            <button onMouseOver={() => toggleShow(1)}>1</button>
            <div className="timeline-content-item-reveal">
              <button
                onMouseLeave={() => toggleShow(1)}
                onClick={() => changeID(1)}
              >
                <img
                  src="https://res.cloudinary.com/dlqpq9wxh/image/upload/v1645698337/Jisooworld/Screencard/Kid%20jisoo.jpg"
                  alt=""
                />
                <span>The day she was born</span>
              </button>
            </div>
          </div>

          <div className={`timeline-content-item ${show[2] ? "active" : ""}`}>
            <button onMouseOver={() => toggleShow(2)}>2</button>
            <div className="timeline-content-item-reveal">
              <button
                onMouseLeave={() => toggleShow(2)}
                onClick={() => changeID(2)}
              >
                <img
                  src="https://res.cloudinary.com/dlqpq9wxh/image/upload/v1645698742/Jisooworld/Screencard/jisoo.jpg"
                  alt=""
                />
                <span>The day you know her as Jisoo</span>
              </button>
            </div>
          </div>

          <div className={`timeline-content-item ${show[3] ? "active" : ""}`}>
            <button onMouseOver={() => toggleShow(3)}>3</button>
            <div className="timeline-content-item-reveal">
              <button
                onMouseLeave={() => toggleShow(3)}
                onClick={() => changeID(3)}
              >
                <img
                  src="https://res.cloudinary.com/dlqpq9wxh/image/upload/v1645698864/Jisooworld/Screencard/Worldtour.jpg"
                  alt=""
                />
                <span>In Your Area World Tour</span>
              </button>
            </div>
          </div>

          <div className={`timeline-content-item ${show[4] ? "active" : ""}`}>
            <button onMouseOver={() => toggleShow(4)}>4</button>
            <div className="timeline-content-item-reveal">
              <button
                onMouseLeave={() => toggleShow(4)}
                onClick={() => changeID(4)}
              >
                <img
                  src="https://res.cloudinary.com/dlqpq9wxh/image/upload/v1645699315/Jisooworld/Screencard/Diormuse.jpg"
                  alt=""
                />
                <span>MUSE</span>
              </button>
            </div>
          </div>

          <div className={`timeline-content-item ${show[5] ? "active" : ""}`}>
            <button onMouseOver={() => toggleShow(5)}>5</button>
            <div className="timeline-content-item-reveal">
              <button
                onMouseLeave={() => toggleShow(5)}
                onClick={() => changeID(5)}
              >
                <img
                  src="https://res.cloudinary.com/dlqpq9wxh/image/upload/v1645699571/Jisooworld/Screencard/theshow.jpg"
                  alt=""
                />
                <span>Blackpink : The Show</span>
              </button>
            </div>
          </div>

          <div className={`timeline-content-item ${show[6] ? "active" : ""}`}>
            <button onMouseOver={() => toggleShow(6)}>6</button>
            <div className="timeline-content-item-reveal">
              <button
                onMouseLeave={() => toggleShow(6)}
                onClick={() => changeID(6)}
              >
                <img
                  src="https://res.cloudinary.com/dlqpq9wxh/image/upload/v1645700011/Jisooworld/Screencard/snowdrop1.jpg"
                  alt=""
                />
                <span>Actress Jisoo</span>
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
