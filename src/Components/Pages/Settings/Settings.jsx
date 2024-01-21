import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import { SettingsContainer } from "./SettingsElements";
import SettingsImage from "../../../Assets/postImage.jpg";
import { BiUserCircle } from "react-icons/bi";

const Settings = () => {
  return (
    <SettingsContainer>
      <div className="settings__Wrapper">
        <div className="settings__Title">
          <span className="settings__Update">Update Your Account</span>
          <span className="settings__Delete">Delete Account</span>
              </div>
              <hr />

        <form>
          <label>Profile Picture</label>
          <div className="settings__Profile__Picture">
            <img src={SettingsImage} alt="SettingsImage" />
            <label htmlFor="file__Input" className="profile__Pic">
              <BiUserCircle />
            </label>
            <input type="file" id="file__Input" style={{ display: "none" }} />
          </div>

          <label>Full Name:</label>
          <input type="text" placeholder="Enter your full name..." />

          <label>Email:</label>
          <input type="email" placeholder="Enter your email..." />

          <label>Password:</label>
          <input type="password" placeholder="Enter your password..." />

          <button>Update</button>
        </form>
      </div>
      <Sidebar />
    </SettingsContainer>
  );
};

export default Settings;
