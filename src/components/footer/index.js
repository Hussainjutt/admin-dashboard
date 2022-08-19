import React from "react";
import "./style.css";
import { AiFillHeart } from "react-icons/ai";
const index = () => {
  return (
    <div className="Main-Footer-Container">
      <div className="Footer-Left-Side">
        <div>
          <p>
            ©
            <span style={{ marginBottom: "-5px" }}>
              &nbsp;
              <AiFillHeart />
              &nbsp;
            </span>
            by
          </p>
          <p> Hussain</p>
          <p>for a better web.</p>
        </div>
      </div>
      <div className="Footer-Right-Side">
        <p>Creative Tim</p>
        <p>About Us</p>
        <p>Blog</p>
        <p>License</p>
      </div>
    </div>
  );
};

export default index;
