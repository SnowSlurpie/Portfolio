import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../particle";
import Techbook from "./techbook";
import Toolstack from "./toolbook";
import Aboutcard from "./aboutCard";
import laptopImg from "../../assets/aboutmephoto.png";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              A bit about me:
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-head"><strong className="color">Technology Competencies</strong>
        </h1>

        <Techbook />

        <h1 className="project-head">
          <strong className="color">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;