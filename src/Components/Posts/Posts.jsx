import React from "react";
import Post from "../Post/Post";
import { Section } from "./PostsElements";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <Section>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Section>
  );
};

export default Posts;
