import styled from "styled-components";
import BackgroundImage from "../../../Assets/contactBg.jpg";

export const ContactContainer = styled.section`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      rgba(255, 285, 255, 0.5),
      rgba(255, 25, 25, 0.2)
    ),
    url(${BackgroundImage});
  background-size: cover;
  background-position: center;

  span {
    font-size: 50px;
  }

  form {
    display: flex;
    flex-direction: column;

    margin-top: 20px;

    label {
      margin: 10px 0;
    }

    input {
      padding: 10px;
      background-color: #fff;
      border: none;
    }

    .Contact__Btn {
      margin-top: 20px;
      cursor: pointer;
      background-color: teal;
      border: none;
      color: #fff;
      border-radius: 10px;
      padding: 10px;
    }
  }


  @media screen and (min-width: 280px) and (max-width: 1080px) {
    
  span {
    font-size: 35px;
  }
  }
`;
