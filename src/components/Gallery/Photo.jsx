import React, { useState } from "react";
import styled from "styled-components";
import "../../index.css";
import 'antd/dist/antd.css';
import { Image } from 'antd';

const Photo = ({ id, name, content, like, img }) => {
  return (
    <article className="photo">
      <Image
      className="column-img"
      style={{'width':'33vw'}}
      src={img}
      alt={name}
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
