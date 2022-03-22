import React, { useState } from "react";
import styled from "styled-components";
import "../../index.css";
import Photo from "../Gallery/Photo";

const PhotoGallery = (photo) => {
  return (
    <Wrapper>
      <Zone>
        <Column>
          {Object.values(photo)
            // .slice(0, Math.floor(Object.values(photo).length / 3))
            .map((photo, index) => {
              if (index % 3 === 0) {
                return <Photo key={photo.id} {...photo} />;
              }
            })}
        </Column>
        <Column>
          {Object.values(photo)
            // .slice(
            //   Math.floor(Object.values(photo).length / 3),
            //   2 * Math.floor(Object.values(photo).length / 3)
            // )
            .map((photo, index) => {
              if (index % 3 === 1) {
                return <Photo key={photo.id} {...photo} />;
              }
            })}
        </Column>
        <Column>
          {Object.values(photo)
            // .slice(
            //   2 *
            //     Math.floor(
            //       Object.values(photo).length / 3,
            //       Object.values(photo).length
            //     )
            // )
            .map((photo, index) => {
              if (index % 3 === 2) {
                return <Photo key={photo.id} {...photo} />;
              }
            })}
        </Column>
      </Zone>
    </Wrapper>
  );
};

export default PhotoGallery;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(to right, #f650a0, #ff9897);
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Zone = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;
const Column = styled.div`
  flex: 33%;
  max-width: 33%;
  padding-left: 8px;
  padding-right: 8px;
  @media screen and (max-width: 768px) {
    flex: 100%;
    max-width: 100%;
  }
`;
