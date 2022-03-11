import * as React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';

type ContainerProps = {
  children: React.ReactChild | React.ReactChild[];
  gap?: number;
};

const StyledContainer = styled.div<{ gap: number }>`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.gap}em;

  * {
    align-self: center;
  }
`;

function Container({ children, gap }: ContainerProps): React.ReactElement {
  return (
    <StyledContainer gap={gap}>
      <Wrapper maxWidth={900}>{children}</Wrapper>
    </StyledContainer>
  );
}
Container.defaultProps = {
  gap: 0,
};

export default Container;
