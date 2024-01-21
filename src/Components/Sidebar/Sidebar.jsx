import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { SidebarContainer } from "./SidebarElements";
import AboutImage from "../../Assets/AboutImage.jpg";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="sidebar__Content">
        <div className="sidebar__Title">
          <span>ABOUT ME</span>
        </div>
        <img src={AboutImage} alt="AboutImage" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          blanditiis numquam delectus
        </p>
      </div>

      <div className="sidebar__Content">
        <div className="sidebar__Title">
          <span>CATEGORIES</span>
        </div>
        <div className="sidebar__List">
          <ul>
            <li>Life</li>
            <li>Music</li>
            <li>Style</li>
            <li>Sport</li>
            <li>Tech</li>
            <li>Cinema</li>
          </ul>
        </div>
      </div>

      <div className="sidebar__Content">
        <div className="sidebar__Title">
          <span>FOLLOW US</span>
        </div>

        <div className="sidebar__Socials">
          <FaFacebookSquare />
          <FaTwitterSquare />
          <FaInstagramSquare />
          <FaPinterestSquare />
        </div>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
