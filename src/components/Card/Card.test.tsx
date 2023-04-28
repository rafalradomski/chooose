import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Card, ICardProps } from './Card';
import { CARDS } from '../Cards/Cards.data';

const CARD_PROPS = CARDS[0];

const renderCard = (props: ICardProps) => {
  const { title, subTitle, imgUrl, emission, defaultRating } = props;
  return render(
    <Card
      title={title}
      subTitle={subTitle}
      imgUrl={imgUrl}
      emission={emission}
      defaultRating={defaultRating}
    />
  );
};

test('should render card content', () => {
  renderCard(CARD_PROPS);
  expect(screen.getByText(CARD_PROPS.title)).toBeInTheDocument();
  expect(screen.getByText(CARD_PROPS.subTitle)).toBeInTheDocument();
  expect(screen.getByText(CARD_PROPS.defaultRating)).toBeInTheDocument();
  expect(screen.getByText(CARD_PROPS.emission)).toBeInTheDocument();
});
