import styled from "styled-components";
import { Colors } from "../../../styles/Colors";

type ButtonProps = {
  isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 56px;
`;

export const Button = styled.div`
transition: all 200ms ease-out 0s;
    outline: none;
    border: none;
    padding: 6px;
    margin-right: 8px;
    font-size: 13px;
    font-family: Gilroy, sans-serif;
    text-align: center;
    cursor: pointer;
    background: ${(props: ButtonProps) => (props.isActive ? Colors.green1 : '#f6f7fa')};
    width: 48px;
    border-radius: 3px;
`;