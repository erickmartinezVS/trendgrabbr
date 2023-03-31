import styled from 'styled-components';

export const Space = styled.div<{ size: number; horizontal?: boolean, test?: boolean }>`
  ${({ size, horizontal, test }) => {
    if (horizontal) {
      return `width: ${size}${test ? "vw" : "px"};`;
    } else {
      return `height: ${size}${test ? "vh" : "px"};`;
    }
  }}
`;
