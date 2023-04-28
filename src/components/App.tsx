import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Cards } from './Cards/Cards';
import { Container } from './Container/Container';

const appStyles = {
  background: '#f5f6f8',
  height: '100vh',
  padding: '16px 0',
};

export const App = () => (
  <ChakraProvider theme={theme}>
    <div style={appStyles}>
      <Container>
        <Cards />
      </Container>
    </div>
  </ChakraProvider>
);
