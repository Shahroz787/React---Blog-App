import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: sticky;
  top: 0;
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  align-items: center;
  z-index: 999;

  .top__Toggle {
    display: none;
  }

  .top__Left,
  .top__Right {
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .top__Left {
    svg {
      font-size: 1.5rem;
      margin-right: 1rem;
      color: #444;
      cursor: pointer;
    }
  }

  .top__Center {
    flex: 6;
  }

  .top__Right {
    .top__Right__Profile {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
      }
      svg {
        font-size: 1.2rem;
        color: #666;
        cursor: pointer;
        margin-top: 0.9rem;
      }
    }
  }

  .list__Item {
    display: flex;
    justify-content: center;
    list-style-type: none;
    gap: 1.4rem;

    li {
      font-size: 1.2rem;
      font-weight: 300;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    position: sticky;

    .top__Center,
    .top__Right > .top__Right__Profile {
      display: none;
    }

    .top__Right {
      justify-content: flex-end;
    }

    .top__Toggle {
      display: flex;
      color: #444444;
      z-index: 99;

      svg {
        font-size: 1.7rem;
        cursor: pointer;
      }
    }

    .top__Left {
      justify-content: flex-start;

      svg {
        margin-right: 0.7rem;
      }
    }
  }
`;

export const ResponsiveTopbar = styled.nav`
  position: fixed;
  right: -10vw;
  top: 4rem;
  z-index: 10;
  background-color: #4444;
  height: 33vh;
  opacity: 1;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  padding: 1rem;

  .responsive__Item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    list-style-type: none;
    gap: 1.6rem;
    margin-top: 1.5rem;

    li {
      font-size: 1.1rem;
      font-weight: 300;
      cursor: pointer;
    }
  }
`;
