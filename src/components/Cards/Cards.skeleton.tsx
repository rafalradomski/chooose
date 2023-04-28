import { FC } from 'react';
import { SimpleGrid, Skeleton } from '@chakra-ui/react';

const skeletonStyles = {
  width: '100%',
};

export const CardsSkeleton: FC = () => {
  return (
    <div style={skeletonStyles}>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
        <Skeleton height="315px" />
        <Skeleton height="315px" />
        <Skeleton height="315px" />
      </SimpleGrid>
    </div>
  );
};
