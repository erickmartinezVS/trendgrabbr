import styled from 'styled-components';

export const Space = styled.div<{ size: number; horizontal?: boolean }>`
  ${({ size, horizontal }) => {
    if (horizontal) {
      return `width: ${size}px;`;
    } else {
      return `height: ${size}px;`;
    }
  }}
`;
