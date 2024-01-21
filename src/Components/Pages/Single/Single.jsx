import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import SinglePost from "../../SinglePost/SinglePost";
import { SingleContainer } from "./SingleElements";

const Single = () => {
  return (
    <SingleContainer>
      <SinglePost />
      <Sidebar />
    </SingleContainer>
  );
};

export default Single;
