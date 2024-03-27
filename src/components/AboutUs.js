// src/components/AboutUs.js
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import '../styles/AboutUs.css'; // Import your CSS file for styling

const AboutUs = () => {
  return (
    <Container className="mt-4">
      <div className="about-introduction">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lorem risus.
          Vivamus auctor, neque a ultricies eleifend, massa nisi fringilla neque, eget dignissim
          eros lacus vel nunc. Donec bibendum venenatis lorem, sed elementum lorem. Sed eget eleifend
          orci, nec efficitur turpis. Mauris luctus libero auctor ante blandit, vel facilisis arcu fringilla.
          Nam pretium, turpis vel tincidunt vulputate, purus lectus faucibus felis, id gravida mi est at elit.
          Suspendisse potenti. Nam et risus non mi aliquet feugiat nec in velit.
        </p>
      </div>
      <h3 className="mt-4">Our Team</h3>
      <Row>
        <Col md={4}>
          <Card className="team-member-card">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lorem risus.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="team-member-card">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lorem risus.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more team members as needed */}
      </Row>
    </Container>
  );
};

export default AboutUs;
