import React from "react";
import { HeaderContainer } from "./HeaderElements";
import HeaderImage from "../../Assets/HeaderImage.jpg";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header__Title">
        <span className="header__Title__Sm">React & Node</span>
        <span className="header__Title__Lg">Blog</span>
      </div>
      <div className="header__image">
        <img src={HeaderImage} alt="HeaderImage" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
