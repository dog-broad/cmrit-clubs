// src/components/ClubCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const ClubCard = ({ club }) => {
  return (
    <Card>
      <Card.Img variant="top" src={club.image} />
      <Card.Body>
        <Card.Title>{club.name}</Card.Title>
        <Card.Text>{club.description}</Card.Text>
        {/* Add more club details here */}
      </Card.Body>
    </Card>
  );
};

export default ClubCard;
