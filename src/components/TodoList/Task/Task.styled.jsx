import styled from "styled-components";

export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
`;

export const InputCheckbox = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const PText = styled.p`
  flex-grow: 1;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};

  color: ${(props) => (props.disabled ? "#bdbdbd" : "#f44336")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "" : "#e2e5e8")};
  }
  &:active {
    background-color: ${(props) => (props.disabled ? "" : "#bdbdbd")};
  }
`;
