// src/components/EventCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({ event }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={event.image} />
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        <Card.Text>{event.description}</Card.Text>
        <Card.Text>{event.date}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
