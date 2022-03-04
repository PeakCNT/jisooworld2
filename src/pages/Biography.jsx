import React, { useEffect, useState } from "react";
import Screen from "../components/Biography/Screen";
import Timeline from "../components/Biography/TimelineBar";
// import { data } from "../components/Biography/Data";
import axios from "axios";

const Biography = () => {
  const [id, setID] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/data")
      .then((response) => {
        // handle success
        setData(response.data.data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        // handle error
        setLoading(false);
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <img
          src="https://res.cloudinary.com/dlqpq9wxh/image/upload/v1646379070/Jisooworld/preload_teoqtf.gif"
          alt=""
        />
      </div>
    );
  }

  return (
    <>
      <Screen {...data[id - 1]} />
      <Timeline passIdtoparent={setID} />
    </>
  );
};

export default Biography;
