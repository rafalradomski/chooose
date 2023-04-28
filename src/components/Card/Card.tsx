import React, { FC, useState } from 'react';
import { Card as ChakraCard, CardBody } from '@chakra-ui/react';
import {
  rootStyles,
  contentStyles,
  titleStyles,
  subTitleStyles,
  emissionsStyles,
  ratingStyles,
  ratingContentStyles,
} from './Card.styles';
import { Rating } from 'react-simple-star-rating';

export interface ICardProps {
  title: string;
  subTitle: string;
  imgUrl: string;
  emission: number;
  defaultRating: number;
}

export const Card: FC<ICardProps> = ({
  title,
  subTitle,
  imgUrl,
  emission,
  defaultRating,
}) => {
  const [rating, setRating] = useState(defaultRating);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
    // other logic
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter');
  const onPointerLeave = () => console.log('Leave');
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);

  return (
    <ChakraCard borderRadius={24}>
      <CardBody p={3}>
        <div
          style={{
            ...rootStyles,
            backgroundImage: `url(${imgUrl})`,
          }}
        >
          <div style={contentStyles}>
            <span style={titleStyles}>{title}</span>
            <span style={subTitleStyles}>{subTitle}</span>
            <div style={emissionsStyles}>
              <span>Emissions offset:</span>
              <span>
                {emission} CO<sub>2</sub>e
              </span>
            </div>
          </div>
          <div style={ratingStyles}>
            <div style={ratingContentStyles}>
              <strong>Trip rating</strong>
              <div
                style={{
                  direction: 'ltr',
                  fontFamily: 'sans-serif',
                  touchAction: 'none',
                  margin: '0 4px 0 16px',
                }}
              >
                <Rating
                  emptyStyle={{ display: 'flex' }}
                  fillStyle={{ display: '-webkit-inline-box' }}
                  onClick={handleRating}
                  onPointerEnter={onPointerEnter}
                  onPointerLeave={onPointerLeave}
                  onPointerMove={onPointerMove}
                  size={30}
                />
              </div>
              <strong>{rating}</strong>
            </div>
          </div>
        </div>
      </CardBody>
    </ChakraCard>
  );
};
