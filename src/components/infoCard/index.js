import React, { useEffect, useState } from "react";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import WeekendRoundedIcon from "@mui/icons-material/WeekendRounded";
import StoreMallDirectoryRoundedIcon from "@mui/icons-material/StoreMallDirectoryRounded";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import test from "../../assets/svgs/result.svg";
import "./style.css";
const Index = (props) => {
  const [variant, setVariant] = useState("");
  useEffect(() => {
    setVariant(props.variant);
  }, [variant]);
  const vriantBase = () => {
    switch (variant) {
      case "dark":
        return (
          <div className={`Logo-container ${variant}`}>
            <WeekendRoundedIcon />
          </div>
        );
        break;
      case "success":
        return (
          <div className={`Logo-container ${variant}`}>
            <StoreMallDirectoryRoundedIcon />
          </div>
        );
      case "pink":
        return (
          <div className={`Logo-container ${variant}`}>
            <PersonAddRoundedIcon />
          </div>
        );
      case "primary":
        return (
          <div className={`Logo-container ${variant}`}>
            <LeaderboardRoundedIcon />
          </div>
        );
      default:
        return null;
        break;
    }
  };
  return (
    <>
      <div className="Info-Card-Container">
        <div className="Info-Card-Body">
          {vriantBase()}
          <div className="Content-container">
            <h1>{props.h1}</h1>
            <p>{props.p1}</p>
          </div>
        </div>
        <hr />
        <div className="Info-Card-Footer">
          <p>
            <span> {props.h2} </span>
            {props.p2}
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
