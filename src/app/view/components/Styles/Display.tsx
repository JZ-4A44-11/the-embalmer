import React from 'react';
import styled from 'styled-components';

type DisplayProps = {
  text: string;
  size?: number;
};

const Title = styled.span<{ size: number }>`
  font-size: ${(props) => props.size}em;
`;

function Display({ text, size }: DisplayProps): React.ReactElement {
  return (
    <span>
      <Title size={size}>{text}</Title>
    </span>
  );
}
Display.defaultProps = {
  size: 1.3,
};

export default Display;
