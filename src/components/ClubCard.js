// src/components/ClubCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const ClubCard = ({ club }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={club.image} />
      <Card.Body>
        <Card.Title>{club.name}</Card.Title>
        <Card.Text>{club.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ClubCard;
