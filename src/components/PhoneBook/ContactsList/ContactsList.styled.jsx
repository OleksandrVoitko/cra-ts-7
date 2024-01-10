import styled from "styled-components";

export const Wrapper = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Li = styled.li`
  & + & {
    border-top: 1px solid #2f2f37;
  }
`;
