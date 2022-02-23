import React from "react";
import Screen from "../components/Biography/Screen";
import Timeline from "../components/Biography/TimelineBar";
import { data } from "../components/Biography/Data";

const Biography = () => {
  return (
    <>
      <Screen {...data[0]} />
      <Timeline />
    </>
  );
};

export default Biography;
