import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #338b8b, #00458b);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.15);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }

  span {
    color: ${lighten(0.1, 'red')};
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bolder;
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: orange;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, 'orange')};
    }
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
