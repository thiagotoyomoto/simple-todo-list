import styled from "styled-components";

export const Container = styled.div`
  display: block;
  padding: 20px;
  width: 500px;
  height: calc(100% - 40px);

  border-radius: 10px;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12), 0 32px 32px rgba(0, 0, 0, 0.12);

  background: #a8aabf;

  p {
    text-align: center;
    color: #9999a1;
  }

  ul {
    list-style-type: none;

    padding: 0 10px;

    overflow-y: scroll;

    height: calc(100% - 50px);
  }
`;
