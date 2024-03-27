import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import ak from '../assets/ak.png';
import '../App.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col xs={6} sm={6} md={6} lg={3}>
            <img
                src={ak}
                width="100%"
                className="d-inline-block align-top mr-3 mb-4"
                alt="CMRIT Logo"
                style={{ objectFit: 'fill' }}
            />
            <p><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" /> CMR Institute of Technology, Address Line 1, Address Line 2, City, State, Zip Code</p>
            <p><FontAwesomeIcon icon={faPhone} size="lg" /> +91-1234567890</p>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3}>
            <h5 id="footer-title">Quick Links</h5>
            <ul className="list-unstyled" id="footer-quick-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#clubs" className="footer-link">Clubs</a></li>
              {/* Add more links as needed */}
            </ul>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3}>
            <h5 id="footer-title">Contact</h5>
            <ul className="list-unstyled" id="footer-contact">
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
              <li><a href="#transport" className="footer-link">Transport</a></li>
              <li><a href="#blog" className="footer-link">Blog</a></li>
              <li><a href="#faq" className="footer-link">FAQ</a></li>
              <li><a href="#terms" className="footer-link">Terms & Conditions</a></li>
              <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col xs={6} sm={6} md={6} lg={3}>
            <h5 id="footer-title">Social Media</h5>
            <ul className="list-unstyled" id="footer-social-media">
              <li><FontAwesomeIcon id = "ft-sm-links" icon={faFacebookF} size="2x" /> <a href="#facebook" className="footer-link">Facebook</a></li>
              <li><FontAwesomeIcon id = "ft-sm-links" icon={faTwitter} size="2x" /> <a href="#twitter" className="footer-link">Twitter</a></li>
              <li><FontAwesomeIcon id = "ft-sm-links" icon={faLinkedinIn} size="2x" /> <a href="#linkedin" className="footer-link">LinkedIn</a></li>
              <li><FontAwesomeIcon id = "ft-sm-links" icon={faInstagram} size="2x" /> <a href="#instagram" className="footer-link">Instagram</a></li>
              <li><FontAwesomeIcon id = "ft-sm-links" icon={faYoutube} size="2x" /> <a href="#youtube" className="footer-link">YouTube</a></li>
              {/* Add more social media links/icons as needed */}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
