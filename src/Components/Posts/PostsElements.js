import styled from "styled-components";

export const Section = styled.section`
  flex: 9;
  display: flex;
  flex-wrap: wrap;
  margin: 20px;

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 302px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
