// src/components/EventCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import EventCard from './EventCard';

const EventCarousel = ({ events }) => {
  return (
    <Carousel>
      {events.map((event, index) => (
        <Carousel.Item key={index}>
          <EventCard event={event} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default EventCarousel;
