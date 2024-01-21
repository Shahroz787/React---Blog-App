import React from "react";
import { SinglePostContainer } from "./SinglePostElements";
import SinglePostImage from "../../Assets/postImage.jpg";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

const SinglePost = () => {
  return (
    <SinglePostContainer>
      <div className="single__Post__Wrapper">
        <div className="single__Post__Image">
          <img src={SinglePostImage} alt="" />

          <div className="single__Post__Title">
            <h1>
              Lorem ipsum dolor, sit amet.
              <RiDeleteBin5Line />
              <BiEdit />
            </h1>

            <div className="single__Post__Info">
              <span className="single__Post__Author">
                Author: <b>Sk Sahed Ahmed</b>
              </span>

              <span className="single__Post__Date">1 hour ago</span>
            </div>
            <div className="single__Post__Desc">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci mollitia voluptas consectetur commodi, earum reiciendis
                natus quam quasi, ad nisi quo iste iure blanditiis facilis totam
                molestiae velit consequatur! Unde. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Adipisci mollitia voluptas
                consectetur commodi, earum reiciendis natus quam quasi, ad nisi
                quo iste iure blanditiis facilis totam molestiae velit
                consequatur! Unde. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Adipisci mollitia voluptas consectetur
                commodi, earum reiciendis natus quam quasi, ad nisi quo iste
                iure blanditiis facilis totam molestiae velit consequatur! Unde.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci mollitia voluptas consectetur commodi, earum reiciendis
                natus quam quasi, ad nisi quo iste iure blanditiis facilis totam
                molestiae velit consequatur! Unde.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SinglePostContainer>
  );
};

export default SinglePost;
