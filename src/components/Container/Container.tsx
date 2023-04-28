import React, { FC, ReactNode } from 'react';
import { Container as ChakraContainer } from '@chakra-ui/react';

export interface IContainer {
  children?: ReactNode;
}

export const Container: FC<IContainer> = ({ children }) => {
  return <ChakraContainer maxW="8xl">{children}</ChakraContainer>;
};
