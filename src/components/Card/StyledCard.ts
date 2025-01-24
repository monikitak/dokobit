import { styled } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 24px;
`;

export const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 86px;
  grid-template-rows: 76px 1fr;
  width: 100%;
  max-width: 426px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  @media (min-width: 576px) {
    max-height: 656px;
  }
`;

export const StyledHeader = styled.div`
  padding: 24px;
  border-bottom: 1px solid #e9e9e9;
`;
