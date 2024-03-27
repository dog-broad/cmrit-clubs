// src/App.js
import React from 'react';
import Header from './components/Header';
import ClubCarousel from './components/ClubCarousel.js';

const clubs = [
  {
    name: 'Coding Club',
    description: 'Learn and practice coding with us!',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Robotics Club',
    description: 'Explore the world of robotics and automation.',
    image: 'https://via.placeholder.com/150',
  },
  // Add more clubs as needed
];

function App() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2>Featured Clubs</h2>
        <ClubCarousel clubs={clubs} />
      </div>
    </div>
  );
}

export default App;
