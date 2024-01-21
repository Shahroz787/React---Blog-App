import styled from "styled-components";

export const PostContainer = styled.section`
  width: 385px;
  margin: 0px 25px 40px 25px;

  .post__Image {
    img {
      width: 100%;
      height: 280px;
      object-fit: cover;
      border-radius: 7px;
    }
  }

  .post__Info {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-family: "Varela Round", sans-serif;
      font-size: 14px;
      color: #444;
      line-height: 24px;
      margin-top: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }

  .post__catg {
    font-family: "Varela Round", sans-serif;
    font-size: 11px;
    color: #be9656;
    line-height: 20px;
    margin-top: 15px;

    span {
      margin-left: 10px;
    }
  }

  .post__Title {
    font-family: "Josefin Sans", sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin-top: 15px;
    cursor: pointer;
  }

  .post__Date {
    font-family: "Lora", serif;
    font-size: 13px;
    font-style: italic;
    color: #999;
    margin-top: 15px;
  }




  
`;
