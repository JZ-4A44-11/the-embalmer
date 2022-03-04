import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    max-width: 1200px;
  }
`;

export function Container({ children }): React.ReactElement {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledFullScreenContainer = styled.div``;

export function FullScreenContainer(): React.ReactElement {
  return <div />;
}
