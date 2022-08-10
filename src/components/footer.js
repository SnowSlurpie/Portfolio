import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub,} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-body">
        </Col>
          <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AR</h3>
          </Col>
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SnowSlurpie"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/alex-running-2a2a53188/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
      </Row>
    </Container>
  );
}

export default Footer;