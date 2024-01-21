import React from "react";
import { FooterContainer } from "./FooterElements";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer__Wrapper">
        <div className="footer__Title">
          <p>&copy; All Rights Reserved by Shahroz Ahmed : 2021-2022</p>
        </div>
        <div className="footer__Content">
          <div className="footer__Title">
            <span>FOLLOW US</span>
          </div>

          <div className="footer__Socials">
            <FaFacebookSquare />
            <FaTwitterSquare />
            <FaInstagramSquare />
            <FaPinterestSquare />
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
