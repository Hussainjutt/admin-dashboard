import React, { useState } from "react";
import "./style.css";
import LOGO from "../../assets/images/sidebarLogo.png";
import profile from "../../assets/images/sideBarprofile.jpg";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ImageIcon from "@mui/icons-material/Image";
import AppsIcon from "@mui/icons-material/Apps";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

const Index = ({ setClose }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="SideBar-Main-Container">
      <span className="closeiconsidebar">
        <MdClose
          onClick={() => {
            setClose("close");
          }}
        />
      </span>
      <div className="SideBar-List">
        <div className="SideBar-heading">
          <img src={LOGO} style={{ width: "100%" }} />
          <h1>Material Dashboard PRO</h1>
        </div>
        <hr className="hr" />
        <ul>
          <li
            className={count === -1 ? "active" : null}
            onClick={() => setCount(-1)}
          >
            <div>
              <div className="Image-Container">
                <img src={profile} style={{ width: "100%" }} />
              </div>
              <p>Brooklyn Alice</p>
            </div>
            <p className="icon">
              <MdKeyboardArrowDown />
            </p>
          </li>
          <hr className="hr" />
          <li
            className={count === 0 ? "active" : null}
            onClick={() => setCount(0)}
          >
            <h1>
              <DashboardIcon />
              <p>Dashboards</p>
            </h1>
            <p className="icon">
              <MdKeyboardArrowDown />
            </p>
          </li>
          <hr className="hr" />
          <small>Pages</small>
          <li
            className={count === 1 ? "active" : null}
            onClick={() => setCount(1)}
          >
            <h1>
              <ImageIcon />
              <p>Pages</p>
            </h1>
            <p className="icon">
              <MdKeyboardArrowDown />
            </p>
          </li>
          <li
            className={count === 2 ? "active" : null}
            onClick={() => setCount(2)}
          >
            <h1>
              <AppsIcon />
              <p>Applications</p>
            </h1>
            <p className="icon">
              <MdKeyboardArrowDown />
            </p>
          </li>
          <li
            className={count === 3 ? "active" : null}
            onClick={() => setCount(3)}
          >
            <h1>
              <ShoppingBasketIcon />
              <p>Ecommerce</p>
            </h1>
            <p className="icon">
              <MdKeyboardArrowDown />
            </p>
          </li>
          <li
            className={count === 4 ? "active" : null}
            onClick={() => setCount(4)}
          >
            <h1>
              <ContentPasteIcon />
              <p>Authentication</p>
            </h1>
            <p className="icon">
              <MdKeyboardArrowDown />
            </p>
          </li>
          <hr className="hr" />
          <small>DOCS</small>
          <li
            className={count === 5 ? "active" : null}
            onClick={() => setCount(5)}
          >
            <h1>
              <UpcomingIcon />
              <p>Basic</p>
            </h1>
            <p className="icon">
              <MdKeyboardArrowDown />
            </p>
          </li>
          <li
            className={count === 6 ? "active" : null}
            onClick={() => setCount(6)}
          >
            <h1>
              <ViewInArIcon />
              <p>Components</p>
            </h1>
            <p className="icon">
              <MdKeyboardArrowDown />
            </p>
          </li>
          <li
            className={count === 7 ? "active" : null}
            onClick={() => setCount(7)}
          >
            <h1>
              <ReceiptLongIcon />
              <p>Change Log</p>
            </h1>
            <p className="icon" style={{ visibility: "hidden" }}>
              <MdKeyboardArrowDown />
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
