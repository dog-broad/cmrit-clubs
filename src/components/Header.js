// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'; // Import your college logo
import { Link, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigateToAboutUs = () => {
    navigate('/about-us');
  };

  const handleNavigateToHome = () => {
    navigate('/');
  }
  const scrollToClubs = () => {
    scroll.scrollTo('clubsSection', {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container className="text-center">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center justify-content-center mx-auto">
          <img
            src={logo}
            width="90"
            height="90"
            className="d-inline-block align-top mr-3"
            alt="CMRIT Logo"
            style={{ objectFit: 'cover' }}
          />
          <div className="d-flex flex-column">
            <div className="text-truncate" style={{ maxWidth: '25ch', fontSize: '0.9rem' }}>CMR Institute of Technology</div>
            <div className="text-truncate" style={{ maxWidth: '25ch', fontSize: '0.7rem' }}>(UGC Autonomous)</div>
            <div className="text-truncate" style={{ maxWidth: '25ch', fontSize: '0.7rem' }}>Approved by AICTE | Accredited by NAAC with 'A' Grade</div>
            <div className="text-truncate" style={{ maxWidth: '25ch', fontSize: '0.7rem' }}>All B. Tech Programs Accredited by NBA</div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faEllipsisV} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link onClick={handleNavigateToHome}>Home</Nav.Link>
            <Nav.Link as={Link} onClick={scrollToClubs} to="clubsSection" smooth={true} duration={800}>Clubs</Nav.Link>
            <Nav.Link onClick={handleNavigateToAboutUs}>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
