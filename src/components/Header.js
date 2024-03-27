// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png'; // Import your college logo

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="text-center">
        <Navbar.Brand href="#home" className="d-flex align-items-center justify-content-center mx-auto">
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
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="#clubs">Clubs</Nav.Link>
            {/* Add more navigation links as needed */}
            <Nav.Link href="#about">About Us</Nav.Link>
            {/* Add more navigation links as needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
