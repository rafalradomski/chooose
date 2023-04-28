import React, { useEffect, useState } from 'react';
import { Card, ICardProps } from '../Card/Card';
import { SimpleGrid } from '@chakra-ui/react';
import { CardsSkeleton } from './Cards.skeleton';
import { CARDS } from './Cards.data';

const displayCardsList = (cards: ICardProps[]) => {
  if (cards?.length === 0) return null;
  return cards.map((card, index) => {
    const {
      title = '',
      subTitle = '',
      imgUrl = '',
      emission,
      defaultRating,
    } = card;
    return (
      <Card
        key={index}
        title={title}
        subTitle={subTitle}
        imgUrl={imgUrl}
        emission={emission}
        defaultRating={defaultRating}
      />
    );
  });
};

export const Cards = () => {
  const [items, setItems] = useState<ICardProps[] | []>([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then(() => {
        setItems(CARDS);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    <CardsSkeleton />
  ) : (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
      {displayCardsList(items)}
    </SimpleGrid>
  );
};
