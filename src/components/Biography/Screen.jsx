import React from "react";
import styled from "styled-components";
import "../../index.css";
import PNG from "../../asset/Albumwithbg.jfif";
import "bulma/css/bulma.css";

const Screen = () => {
  return (
    <Wrapper>
      <SCard>
        <div className="screen-imgbox">
          <img className="screen-img" src={PNG} alt="" />
        </div>
        <div className="screen-txtbox">
          <h1 className="screen-header">Blackpink 2022 Welcoming Collection</h1>
          <p className="screen-text" style={{ paddingTop: "3rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius est
            quae, provident culpa similique dolore excepturi qui, officia iusto
            dolorem quos id rem temporibus soluta quidem tempore consequuntur
            ipsam blanditiis dignissimos quasi repellendus. Est, aliquam
            doloremque. Dignissimos minima illum quis natus totam. Ex iure vel
            beatae ducimus explicabo tempora cum accusamus facere quas ipsam,
            qui debitis ullam, architecto voluptates consequatur.
          </p>
          <button className="button is-dark screen-btn neon-button">
            Read more
          </button>
        </div>
      </SCard>
    </Wrapper>
  );
};

export default Screen;

const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  background: papayawhip;
  justify-content: center;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
`;

const SCard = styled.article`
  width: 90%;
  height: 90%;
  background: pink;
  border: 10px solid #333333;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;
  box-shadow: inset 0 0 0.5em 0 rgb(22, 21, 22), 0 0 0.5em 0 rgb(22, 21, 22);
  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
    flex-direction: column;
  }
`;
