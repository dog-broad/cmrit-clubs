// src/components/AboutUs.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/AboutUs.css'; // Import your CSS file for styling

const AboutUs = () => {
  const [isTeamVisible, setTeamVisible] = useState(false);

  const toggleTeamVisibility = () => {
    setTeamVisible(!isTeamVisible);
  };

  return (
    <div className="container mt-4">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lorem risus. Vivamus auctor, neque a ultricies eleifend, massa nisi fringilla neque, eget dignissim eros lacus vel nunc. Donec bibendum venenatis lorem, sed elementum lorem. Sed eget eleifend orci, nec efficitur turpis. Mauris luctus libero auctor ante blandit, vel facilisis arcu fringilla. Nam pretium, turpis vel tincidunt vulputate, purus lectus faucibus felis, id gravida mi est at elit. Suspendisse potenti. Nam et risus non mi aliquet feugiat nec in velit.
      </p>
      <Button onClick={toggleTeamVisibility} variant="primary" className="mt-3">
        {isTeamVisible ? 'Hide Team' : 'Show Team'}
      </Button>
      {isTeamVisible && (
        <div className="team-container mt-4">
          <h3>Our Team</h3>
          <div className="member">
            <img src="https://via.placeholder.com/150" alt="Member" />
            <p>John Doe</p>
          </div>
          <div className="member">
            <img src="https://via.placeholder.com/150" alt="Member" />
            <p>Jane Smith</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      )}
    </div>
  );
};

export default AboutUs;
