import React from "react";
import "../index.css";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <Wrapper>
      <div>
        Thank you for visiting.This is my first project of website
        developing.You can contact me via.
      </div>
      <a
        href="https://github.com/PeakCNT"
        target="_blank"
        style={{ color: "black" }}
      >
        <FaGithub /> : PeakCNT
      </a>
      <div>
        <MdEmail /> : chanatipninenine@gmail.com
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  background: linear-gradient(to right, #f650a0, #ff9897);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
