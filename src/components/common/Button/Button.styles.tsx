import styled, { css } from 'styled-components';

export const Button = styled.button<{
  size: 'SS' | 'S' | 'M' | 'L';
  view: 'white' | 'black';
}>`
  padding: 0;

  ${({ size }) => {
    switch (size) {
      case 'SS':
        return css`
          width: 2.4rem;
          height: 1.4rem;
        `;
      case 'S':
        return css`
          width: 4.2rem;
          height: 3rem;
        `;
      case 'M':
        return css`
          width: 9.8rem;
          height: 3.5rem;

          font-weight: 400;
          font-size: 16px;
        `;
      case 'L':
        return css`
          width: 38.8rem;
          height: 7.3rem;

          font-weight: 400;
          font-size: 24px;
        `;
    }
  }}

  ${({ view }) => {
    switch (view) {
      case 'white': {
        return css`
          background-color: white;
          border: 1px solid #bbbbbb;
          color: #bbbbbb;
        `;
      }
      case 'black': {
        return css`
          background-color: #333333;
          border: 1px solid #333333;
          color: white;
        `;
      }
    }
  }}
`;