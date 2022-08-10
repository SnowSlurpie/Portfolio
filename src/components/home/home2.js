import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub,} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import devPhoto from "../../assets/devPhoto.jpg";
import Tilt from "react-parallax-tilt";
import Particle from "../particle";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle></Particle>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me tell you a little bit about <span className="color">myself!</span>
            </h1>
            <p className="home-about-body">
              I have completed a rigerous educational program that allowed me to develop the necessary skills to be a successful software developer. I have a passion for learning and I am always looking to improve my skills.
              <br />
              <br />I am fluent in HTML, CSS, and Javascript. I am an effecient and concise  communicator that has experience coordinating with large teams with different backgrounds through Kanban & daily Scrum meetings.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="color">Node.js</b> and
              <i>
                <b className="color">
                  {" "}
                  Modern Javascript Frameworks
                </b>
              </i>
              &nbsp;like
              <i>
                <b className="color"> React.js</b>
              </i>
            </p>
            </Col>
            <Col md={4} className="devPhoto">
              <Tilt>
                <img src= {devPhoto} alt="Developer pic" className="img-fluid" />
              </Tilt>
            </Col>

            {/* TODO: Add rounded corners to dev photo. referencing this: https://reactnativecode.com/set-rounded-corners-radius-border/ */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Please reach out!</h1>
            <p>
              Feel free to <span className="color">contact </span>me below
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SnowSlurpie"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alex-running-2a2a53188/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;