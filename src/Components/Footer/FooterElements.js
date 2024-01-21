import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: lightgray;
 
  padding: 2rem;

  .footer__Wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .footer__Title {
      p {
        font-size: 1rem;
      }
    }
  }

  .footer__Content {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;

    span {
      border-top: 1px solid #a7a4a4;
      border-bottom: 1px solid #a7a4a4;
      font-family: "Varela Round", sans-serif;
      font-size: 12px;
      color: #222;
      font-weight: 600;
      padding: 10px 30px;
    }
  }

  .footer__Socials {
    display: flex;
    gap: 0.9rem;

    svg {
      font-size: 1.3rem;
      cursor: pointer;
    }
  }



  @media screen and (max-width: 480px) {
    
    .footer__Wrapper {
   

    .footer__Title {
      p {
        font-size: 0.8rem;
      }
    }


  }


  @media screen and (min-width: 280px) and (max-width: 470px){
    .footer__Wrapper {
   

   .footer__Title {
     p {
       font-size: 0.6rem;
     }
   }
  }
`;
