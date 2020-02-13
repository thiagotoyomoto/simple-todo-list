import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
  }

  input {
    margin-left: 5%;
    margin-right: 10px;
    margin-bottom: 20px;
    padding: 0 10px;
    width: calc(90% - 40px);
    height: 30px;

    border: 2px solid #9999a1;
    border-radius: 15px;

    line-height: 26px;
    font-size: 18px;

    word-wrap: break-word;
    word-break: break-all;

    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
      0 4px 4px rgba(0, 0, 0, 0.15);

    background: #f1f1f1;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: #f1f1f1;
    border: 2px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
      0 4px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`;
