import React from 'react';
import styled from 'styled-components';

type ContentProps = {
  maxWidth?: number;
  children: React.ReactChild;
};

const Wrapper = styled.span<{ maxWidth: number }>`
  max-width: ${(props) => props['max-w']}px;
`;

function Content({ maxWidth, children }: ContentProps): React.ReactElement {
  return <Wrapper maxWidth={maxWidth}>{children}</Wrapper>;
}

Content.defaultProps = {
  maxWidth: 900,
};

export default Wrapper;
