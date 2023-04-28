import React, { FC } from 'react';
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

export interface ICardProps {
  title: string;
  subTitle: string;
  imgUrl: string;
  emission: number;
  rating: number;
}

export const Card: FC<ICardProps> = ({
  title,
  subTitle,
  imgUrl,
  emission,
  rating,
}) => {
  return (
    <ChakraCard borderRadius={16}>
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
            <div style={ratingContentStyles}>Trip rating: {rating}</div>
          </div>
        </div>
      </CardBody>
    </ChakraCard>
  );
};
