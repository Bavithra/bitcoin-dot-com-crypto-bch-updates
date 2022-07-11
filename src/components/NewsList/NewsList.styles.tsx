import styled from "styled-components";

import { FontSizes } from "../../styles/FontSizes";
import { mediaMax } from "../../styles/MediaQuery.styles";

export const InContainer = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 24px;
  background: rgb(255, 255, 255);
  background-color: rgb(246, 247, 250);
  box-shadow: rgb(0 0 0 / 10%) 0px 20px 50px 0px;
  margin: 0px;
  overflow: hidden;
`;

export const Container = styled.div`
  gap: 32px 24px;
  grid-template-columns: repeat(4, 1fr);
  display: grid;
  margin: 12px 0px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  padding: 12px;

  ${mediaMax("md")} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NewsTitle = styled.h1`
  margin-bottom: 60px;
  font-size: 24px;
  color: #3c1053;
  margin: 12px;

  ${mediaMax("md")} {
    font-size: ${FontSizes.size6};
  }
`;
