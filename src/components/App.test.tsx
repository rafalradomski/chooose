import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { render } from '../test-utils/test-utils';
import { App } from './App';
import { ChakraProvider, theme } from '@chakra-ui/react';

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

test('should render app', () => {
  render(
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  );
  const linkElement = screen.getByText(/Chooose Task/i);
  expect(linkElement).toBeInTheDocument();
});
