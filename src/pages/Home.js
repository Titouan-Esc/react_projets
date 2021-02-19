import Person from "../components/Person";
import Body from "../components/Body";
import React, { useState } from "react";
import data from "../data";

const Home = () => {
  const [anonyme, setAnonyme] = useState(data);
  return (
    <>
      <div className="bas">
        <Person anonyme={anonyme} />
      </div>
      <Body />
    </>
  );
};

export default Home;
