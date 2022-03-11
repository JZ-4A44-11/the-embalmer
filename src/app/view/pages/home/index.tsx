import * as React from 'react';
import Container from '../../components/Containers';
import Display from '../../components/Styles/Display';

export default function Home(): React.ReactElement {
  return (
    <Container gap={2}>
      <Display text="The Show Must Go On" size={4} />
    </Container>
  );
}
