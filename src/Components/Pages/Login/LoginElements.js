import styled from "styled-components";
import BackgroundImage from "../../../Assets/background.jpg";

export const LoginContainer = styled.section`
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

    .login__Btn {
      margin-top: 20px;
      cursor: pointer;
      background-color: teal;
      border: none;
      color: #fff;
      border-radius: 10px;
      padding: 10px;
    }
  }

  .register__Btn {
    position: absolute;
    top: 60px;
    left: 20px;
    cursor: pointer;
    background-color: lightcoral;
    border: none;
    color: #fff;
    border-radius: 10px;
    padding: 10px;
  }
`;
