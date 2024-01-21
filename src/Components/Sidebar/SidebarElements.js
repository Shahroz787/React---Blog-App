import styled from "styled-components";

export const SidebarContainer = styled.aside`
  flex: 3;
  margin: 20px;
  padding-bottom: 30px;
  background-color: #fdfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .sidebar__Content {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 90%;
      height: 450px;
      margin-top: 15px;
    }

    p {
      padding: 30px;
      text-align: center;
    }
  }

  .sidebar__Title {
    margin: 10px;
    padding: 5px;
    width: 80%;
    border-top: 1px solid #a7a4a4;
    border-bottom: 1px solid #a7a4a4;
    font-family: "Varela Round", sans-serif;
    font-size: 12px;
    color: #222;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
  }

  .sidebar__List {
    ul {
      list-style-type: none;
      margin-bottom: 30px;

      li {
        display: inline-block;
        width: 50%;
        margin-top: 15px;
        cursor: pointer;
        text-align: center;
      }
    }
  }

  .sidebar__Socials {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    width: 250px;

    svg {
      cursor: pointer;
    }
  }
`;
