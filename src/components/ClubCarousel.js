// src/components/ClubCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import ClubCard from './ClubCard';

const ClubCarousel = ({ clubs }) => {
  return (
    <Carousel>
      {clubs.map((club, index) => (
        <Carousel.Item key={index}>
          <ClubCard club={club} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ClubCarousel;
