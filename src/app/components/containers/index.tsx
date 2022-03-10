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

type ContainerProps = {
  children: React.ReactNode;
};

const StyledFullScreenContainer = styled.div`
  display: flex;
  min-height: 100%;
`;

export function Container({ children }: ContainerProps): React.ReactElement {
  return <StyledContainer>{children}</StyledContainer>;
}

export function FullScreenContainer(): React.ReactElement {
  return <StyledFullScreenContainer />;
}
