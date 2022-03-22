import React, { useState } from "react";
import styled from "styled-components";
import "../../index.css";
import "antd/dist/antd.css";

const Screen = ({ id, img, title, content }) => {
  return (
    <Wrapper>
      <SCard>
        <div className="screen-imgbox">
          <img className="screen-img" src={img} alt="" />
        </div>
        <div className="screen-txtbox">
          <h1 className="screen-header">{title}</h1>
          <p
            className="screen-text"
            style={{ paddingTop: "3rem", fontSize: "1.25rem" }}
          >
            {content}
          </p>
        </div>
      </SCard>
    </Wrapper>
  );
};

export default Screen;

const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  background: linear-gradient(to right, #f650a0, #ff9897);
  justify-content: center;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
`;

const SCard = styled.article`
  width: 90%;
  height: 90%;
  background: white;
  color: black;
  border: 10px solid #333333;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  box-shadow: inset 0 0 0.5em 0 rgb(22, 21, 22), 0 0 0.5em 0 rgb(22, 21, 22);
  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
    flex-direction: column;
  }
`;
