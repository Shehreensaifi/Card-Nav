import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={value.img} alt="music-1" />
          </div>
          <div>
            <p className="card-title">{value.singer}</p>
            <p className="card-song">{value.song}</p>
            <span>
              <p className="p1">{value.duration}</p>
              <p className="p2">{value.likes}</p>
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
