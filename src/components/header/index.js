import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { AiFillHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { MdOutlineMenu, MdOutlineMenuOpen } from "react-icons/md";
import "./style.css";
const Index = ({ setClose, close }) => {
  const [offset, setOffset] = useState();
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("load", onScroll);
  }, []);
  return (
    <>
      <div
        className={`${
          offset > 1 ? "On-scroll-class" : null
        } Main-Header-Container `}
      >
        <div className="Header-Left-Side">
          <p>
            <AiFillHome />
            <span> / </span> Dashboard <span> / </span>
            <span>Analytics</span>
          </p>
          <p> Analytics</p>
        </div>
        <div className="Header-Right-Side">
          <span>
            <TextField
              id="outlined-basic"
              label="Search here"
              variant="outlined"
              size="small"
            />
          </span>
          <span>
            {close === "show" ? (
              <MdOutlineMenu
                onClick={() => {
                  setClose("close");
                }}
              />
            ) : (
              <MdOutlineMenuOpen
                onClick={() => {
                  setClose("show");
                }}
              />
            )}
          </span>
          <span>
            <FaUserCircle />
          </span>
          <span>
            <IoMdSettings />
          </span>
          <span>
            <GoBell />
            <p className="notification">9</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Index;
