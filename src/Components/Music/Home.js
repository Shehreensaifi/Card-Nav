import React from "react";
import Card from "../Ui/Card";
import MUSIC_DATA from "../../musicData";
import { useState } from "react";
import logo from "./../../assets/logo192.png";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (!isLoading) {
    setIsLoading(true);
  }
  return (
    <>
      {!isLoading && <img src={logo} alt="Loading..."></img>}
      {isLoading && (
        <div className="home-cards">
          <Card details={MUSIC_DATA} />
        </div>
      )}
    </>
  );
};
export default Home;
