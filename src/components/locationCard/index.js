import React, { useState } from "react";
import "./style.css";
import Img1 from "../../assets/images/locationCard1.jpg";
import { IoMdRefresh } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
const Index = (props) => {
  const [style, setStyle] = useState("");
  return (
    <div
      className="Location-Card-Container"
      onMouseEnter={(e) => {
        setStyle("smoth");
      }}
      onMouseLeave={(e) => {
        setStyle("");
      }}
    >
      <div className="Card-Body">
        <div className="img-container">
          <img src={props.img} alt="Somthing wrong" className={style} />
          <img
            src={props.img}
            alt="Somthing wrong"
            style={{ width: "100%" }}
            className={`${style} img`}
          />
          <span className="location-card-icons hide">
            <IoMdRefresh />
            <MdModeEditOutline />
          </span>
        </div>
        <div className="content-container">
          <h1>{props.name}</h1>
          <p>{props.description}</p>
        </div>
      </div>
      <hr />
      <div className="Card-Footer">
        <h1>${props.price}</h1>
        <h1>
          <HiLocationMarker />
          <span>{props.location}</span>
        </h1>
      </div>
    </div>
  );
};

export default Index;
