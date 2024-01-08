import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "orangered" : "#e2e5e8")};
  color: ${(props) => (props.selected ? "white" : " black")};

  &:hover,
  &:focus {
    color: white;
    background-color: orangered;
  }
`;
