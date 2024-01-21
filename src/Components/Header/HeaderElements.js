import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin-top: 60px;

  .header__Title {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Lora", serif;
    color: #444;

    .header__Title__Sm {
      position: absolute;
      top: 18%;
      font-size: 1.4rem;
    }

    .header__Title__Lg {
      position: absolute;
      top: 20%;
      font-size: 95px;
    }
  }

  .header__image {
    img {
      width: 100%;
      height: 450px;
      margin-top: 80px;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .header__image {
      img {
        width: 100%;
        height: 250px;
        margin-top: 40px;
        object-fit: cover;
      }
    }
    .header__Title {
      .header__Title__Lg {
        top: 13%;
        font-size: 70px;
      }

      .header__Title__Sm {
        top: 11%;
        font-size: 1.2rem;
      }
    }
  }
`;
