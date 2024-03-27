// src/App.js
import React from 'react';
import Header from './components/Header';
import ClubCard from './components/ClubCard';
import EventCarousel from './components/EventCarousel';

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
  {
    name: 'AI Club',
    description: 'Get ready for the future of AI!',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'IoT Club',
    description: 'Connect with the world of Internet of Things.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'CSE Club',
    description: 'Learn and build your professional skills.',
    image: 'https://via.placeholder.com/150',
  }
];

const events = [
  {
    title: 'Tech Fest',
    description: 'Annual technical festival',
    image: 'https://via.placeholder.com/400',
    date: 'March 30, 2024',
  },
  {
    title: 'Workshop on AI',
    description: 'Introduction to Artificial Intelligence',
    image: 'https://via.placeholder.com/400',
    date: 'April 15, 2024',
  },
  // Add more events as needed
  {
    title: 'Hackathon',
    description: 'An event for people who love to hack',
    image: 'https://via.placeholder.com/400',
    date: 'May 20, 2024',
  },
  {
    title: 'Seminar',
    description: 'A seminar on Cloud Computing',
    image: 'https://via.placeholder.com/400',
    date: 'June 5, 2024',
  },
  {
    title: 'Workshop on IoT',
    description: 'Introduction to Internet of Things',
    image: 'https://via.placeholder.com/400',
    date: 'July 10, 2024',
  }
];

function App() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2>Events</h2>
        <EventCarousel events={events} />
        <hr />
        <h2>Clubs</h2>
        <div className="row">
          {clubs.map((club, index) => (
            <div key={index} className="col-md-4">
              <ClubCard club={club} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
