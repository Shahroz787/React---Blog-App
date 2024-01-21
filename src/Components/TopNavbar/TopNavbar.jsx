import React from "react";
import { NavbarContainer, ResponsiveTopbar } from "./TopNavbarElements";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import NavImage from "../../Assets/NavImage.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const navTopbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [topbarState, setTopbarState] = useState(false);

  const showSidebar = () => setTopbarState(false);
  const hideSidebar = (event) => {
    event.stopPropagation();
    setTopbarState(true);
  };

  const user = true;

  return (
    <>
      <NavbarContainer>
        <div className="top__Left">
          <FaFacebookSquare />
          <FaTwitterSquare />
          <FaInstagramSquare />
          <FaPinterestSquare />
        </div>
        <div className="top__Center">
          <ul className="list__Item">
            <li>
              <Link to="/" className="link">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                CONTACT
              </Link>
            </li>
            <li>
              <Link to="/write" className="link">
                WRITE
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                {user && "LOGOUT"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="top__Right">
          <div className="top__Toggle">
            {topbarState ? (
              <VscChromeClose onClick={showSidebar} />
            ) : (
              <GiHamburgerMenu onClick={hideSidebar} />
            )}
          </div>

          <div className="top__Right__Profile">
            {user ? (
              <>
                <img src={NavImage} alt="Nav Image" />
                <BsSearch />
              </>
            ) : (
              <>
                <Link to="/login" className="link">
                  LOGIN
                </Link>
                <Link to="/register" className="link">
                  REGISTER
                </Link>
              </>
            )}
          </div>
        </div>
      </NavbarContainer>

      {/* Responsive slidebar area starts from here */}

      <ResponsiveTopbar
        state={topbarState}
        className={topbarState ? "show" : ""}
      >
        <ul className="responsive__Item">
          <li>
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>
          <li>
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </ResponsiveTopbar>
    </>
  );
};

export default navTopbar;
