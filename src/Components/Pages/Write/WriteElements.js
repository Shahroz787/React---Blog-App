import styled from "styled-components";

export const WriteContainer = styled.section`
  padding-top: 50px;

  form {
    position: relative;
  }

  .write__Form__Group {
    margin-left: 150px;
    display: flex;
 

    label {
      svg {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: gray;
        padding: 3px;
        cursor: pointer;
        margin-top: 1.6rem;
      }
    }
  }

  .write__Img{
      img{
          width: 70vw;
          height: 250px;
          border-radius: 10px;
          object-fit: cover;
          margin-left: 150px;
      }
  }

  .write__Input {
    font-size: 30px;
    border: none;
    padding: 20px;
    width: 70vw;

    :focus {
      outline: none;
    }
  }

  .write__Text {
    font-size: 20px;
    margin-left: 2rem;
    height: 100vh;
  }

  .write__Submit {
    position: absolute;
    top: 20px;
    right: 50px;
    color: #fff;
    background-color: teal;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
  }

  
`;
