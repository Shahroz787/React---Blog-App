import styled from "styled-components";

export const SinglePostContainer = styled.section`
  flex: 9;

  .single__Post__Wrapper {
    padding: 20px;
    padding-right: 0;
  }

  .single__Post__Image {
    img {
      width: 100%;
      height: 300px;
      border-radius: 5px;
      object-fit: cover;
    }
  }

  .single__Post__Title {
    h1 {
      font-family: "Lora", serif;
      text-align: center;
      margin: 10px;
      font-size: 28px;
    }
    svg {
      float: right;
      font-size: 17px;
      margin-left: 10px;
      cursor: pointer;

      :last-child {
        color: teal;
      }

      :first-child {
        color: tomato;
      }
    }
  }

  .single__Post__Info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    font-size: 1rem;
    color: #b39656;
    font-family: "Varela Round", sans-serif;
  }

  .single__Post__Desc {
    p {
      color: #666;
      line-height: 25px;
      font-size: 18px;

      ::first-letter {
          margin-left: 20px;
          font-size: 30px;
          font-weight: 600;
      }
    }
  }
`;
