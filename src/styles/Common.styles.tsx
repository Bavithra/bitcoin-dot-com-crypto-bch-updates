import styled from "styled-components";

import { Colors } from "../styles/Colors";
import { mediaMax } from "../styles/MediaQuery.styles";

export const PageContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  background: #f1f7fc;
  padding: 10px 18px;
`;

export const ComponentContainer = styled.div`
  padding: 10px 18px;
`;

export const Text = styled.div`
  color: rgba(19, 23, 32, 0.5);
  margin: 8px;
  color: ${Colors.grey4};
`;
