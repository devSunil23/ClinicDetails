import React, { useState } from "react";
import Navigationmenu from "./Navigationmenu";
import { BiHelpCircle } from "react-icons/bi";
const Header = ({ dataDoctor }) => {
  const [showNav, setshowNav] = useState(true);

  return (
    <>
      <div className="header">
        <div className="headerTop">
          <img
            src="./images/Zendentalogo.png"
            alt="Zendenta"
            className="zendentaLogo"
          />
          <img
            src="./images/menu.svg"
            alt="menu"
            className="menuIcon"
            onClick={() => setshowNav(!showNav)}
          />
        </div>
        {showNav ? <Navigationmenu /> : ""}
        <div className="help">
          <BiHelpCircle />
          <span>Help ?</span>
        </div>
        <div className="doctorDetailsSection">
          <img
            src="https://www.kindpng.com/picc/m/244-2447623_doctor-image-with-transparent-doctor-png-png-download.png"
            alt="img"
            className="doctorImage"
          />
          <div className="doctordetals">
            <p className="doctorName">{dataDoctor[0]?.name}</p>
            <p className="doctorSpecification">
              {dataDoctor[0]?.specification}
            </p>
          </div>
          <select name="" id="dropDown">
            <option value="0"></option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Header;
