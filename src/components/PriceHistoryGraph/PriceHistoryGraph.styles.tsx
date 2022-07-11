import styled from "styled-components";

import { FontSizes } from "../../styles/FontSizes";
import { mediaMax } from "../../styles/MediaQuery.styles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px;
  box-sizing: border-box;
  border-radius: 24px;
  background: rgb(255, 255, 255);
  background-color: rgb(246, 247, 250);
  box-shadow: rgb(0 0 0 / 10%) 0px 20px 50px 0px;
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
