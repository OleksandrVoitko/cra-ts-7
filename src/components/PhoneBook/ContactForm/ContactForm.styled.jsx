import styled from "styled-components";

export const Forma = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0 10px;
`;

export const Label = styled.label`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 8px;
  font: inherit;

  &:focus {
    outline-color: orangered;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 10px 12px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
  background-color: #e2e5e8;
  color: ${(props) => (props.disabled ? "white" : "black")};

  &:hover,
  &:focus {
    color: ${(props) => (props.disabled ? "" : "white")};
    background-color: ${(props) => (props.disabled ? "" : "orangered")};
  }
`;
