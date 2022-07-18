import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectCard";
import Particle from "../particle";
import pawnder from "../../assets/projects/pawnder.png";
import runBuddy from "../../assets/projects/run-buddy.png";
import spirit from "../../assets/projects/spirit.jpg";


function Projects() {
  return (
    <Container fluid className="project-container">
      <Particle />
      <Container>
        <h1 className="project-head">
          My Recent <strong className="color">Projects </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are some projects I have worked on!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pawnder}
              title="Pawnder!"
              description="Application that allows users to meet other like-minded people and connect with them and their dog. You create a profile, then you can search for other users and connect with them."
              hubLink="https://github.com/SnowSlurpie/woof-call"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={runBuddy}
              title="Run Buddy"
              description="A website for people to further their exercise ambitions by connecting with trainers"
              hubLink="https://github.com/SnowSlurpie/run_buddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spirit}
              title="The Nasa Spririt"
              description="This project is a website that allows the end user to obtain the current weather for a location while also retrieving data related to the moon phase and how clear the sky is at that given moment. Uses Visual Crossing's Weather API and NASA's Astronomy Picture of the Day API."
              hubLink="https://github.com/aubree-alexander/the-nasa-spirit"          
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;