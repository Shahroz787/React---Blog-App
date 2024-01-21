import React from "react";
import { WriteContainer } from "./WriteElements";
import { BsPlusLg } from "react-icons/bs";
import WriteImage from "../../../Assets/postImage.jpg";

const Write = () => {
  return (
    <WriteContainer>
      <div className="write__Img">
        <img src={WriteImage} alt="WriteImage" />
      </div>

      <form>
        <div className="write__Form__Group">
          <label htmlFor="file__Input">
            <BsPlusLg />
          </label>
          <input type="file" id="file__Input" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Enter your title..."
            className="write__Input"
            autoFocus={true}
          />
        </div>

        <div className="write__Form__Group">
          <textarea
            placeholder="Write your story..."
            type="text"
            className="write__Input write__Text"
          ></textarea>
        </div>

        <button className="write__Submit">PUBLISH</button>
      </form>
    </WriteContainer>
  );
};

export default Write;
