import styled from "styled-components";

export const SettingsContainer = styled.section`
  display: flex;

  .settings__Wrapper {
    flex: 9;
    padding: 20px;
  }

  .settings__Title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .settings__Update {
    margin-bottom: 20px;
    font-size: 30px;
    color: lightcoral;
  }

  .settings__Delete {
    color: red;
    font-size: 12px;
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 20px;
      margin-top: 20px;
    }

    input {
      color: gray;
      margin: 10px 0;
      height: 30px;
      border: none;
      border-bottom: 1px solid lightgray;
    }

    button {
        width: 150px;
        align-self: center;
        border: none;
        color: #fff;
        background-color: teal;
        border-radius: 10px;
        cursor: pointer;
        padding: 10px;
        margin-top: 20px;
    }
  }

  .settings__Profile__Picture {
    display: flex;
    align-items: center;
    margin: 10px 0;

    img {
      width: 70px;
      height: 70px;
      border-radius: 20px;
      object-fit: cover;
    }

    svg {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: lightcoral;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      cursor: pointer;
    }
  }
`;
