import React from "react";
import { PostContainer } from "./PostElements";
import postImage from "../../Assets/postImage.jpg";

const Post = () => {
  return (
    <PostContainer>
      <div className="post__Image">
        <img src={postImage} alt="postImage" />
      </div>

      <div className="post__Info">
        <div className="post__catg">
          <span>Music</span>
          <span>Life</span>
        </div>

        <span className="post__Title">Lorem ipsum dolor sit amet.</span>
        <hr />

        <span className="post__Date">1 hour ago</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente
          ad vero perspiciatis adipisci quae labore repudiandae fugit, vel,
          perferendis accusantium veniam dolorem corrupti voluptas. Vitae est
          porro saepe rerum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente
          ad vero perspiciatis adipisci quae labore repudiandae fugit, vel,
          perferendis accusantium veniam dolorem corrupti voluptas. Vitae est
          porro saepe rerum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente
          ad vero perspiciatis adipisci quae labore repudiandae fugit, vel,
          perferendis accusantium veniam dolorem corrupti voluptas. Vitae est
          porro saepe rerum!
        </p>
      </div>
    </PostContainer>
  );
};

export default Post;
