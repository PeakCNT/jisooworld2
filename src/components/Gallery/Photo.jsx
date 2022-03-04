import React, { useState } from "react";
import styled from "styled-components";
import "../../index.css";

const Photo = ({ id, name, content, like, img }) => {
  return (
    <article className="photo">
      <img
        className="column-img"
        src={img}
        alt={name}
        onClick={() => {
          console.log("Hi");
        }}
      />
      <div className="photo-info">
        <h2>{name}</h2>
        <p>{like} likes</p>
        <p>{content}</p>
      </div>
    </article>
  );
};

export default Photo;
