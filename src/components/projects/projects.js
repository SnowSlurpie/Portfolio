import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./projectCard";
import Particle from "../particle";
import pawnder from "../../assets/projects/pawnder.png";
import runBuddy from "../../assets/projects/run-buddy.png";
import spirit from "../../assets/projects/spirit.jpg";
import book from "../../assets/projects/book.png";
import chore from "../../assets/projects/chore.png";
import dbd from "../../assets/projects/dbd.jpg";


function Projects() {
  return (
    <Container fluid className="project-container">
      <Particle />
      <Container>
        <h1 className="project-head">
          My Recent <strong className="color">Projects: </strong>
        </h1>
        <p style={{ color: "black" }}>
          Feel free to look at some of the things I've worked on
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
          <ProjectCards
              imgPath={dbd}
              title="Buddy By Daylight"
              description="Buddy By Daylight is an application created with the intent of being a valuable tool for both new and veteran players of Dead By Daylight. Check your achievements on Steam, create builds, and read the lore of your favorite characters here. This project is a work in progress and is currently in development."
              hubLink="https://github.com/SnowSlurpie/buddy_by_daylight" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={pawnder}
              title="Pawnder!"
              description="Application that allows users to meet other like-minded people and connect with them and their dog. You create a profile, then you can search for other users and connect with them."
              hubLink="https://github.com/SnowSlurpie/woof-call"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={runBuddy}
              title="Run Buddy"
              description="A website for people to further their exercise ambitions by connecting with trainers."
              hubLink="https://github.com/SnowSlurpie/run_buddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={spirit}
              title="The Nasa Spirit"
              description="This project is a website that allows the end user to obtain the current weather for a location while also retrieving data related to the moon phase and how clear the sky is at that given moment. Uses Visual Crossing's Weather API and NASA's Astronomy Picture of the Day API."
              hubLink="https://github.com/aubree-alexander/the-nasa-spirit"          
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCards
              imgPath={book}
              title="Book Search"
              description="This book search engine utilizes GraphQL with Apollo servers. With this search engine you can utilize the Google Books API to search for books and save them to your account if you are logged in to be able to view them later. You are also able to remove saved books from your profile wehen inspecting your saved book list. This application is deployed on Heroku as well."
              hubLink="https://github.com/SnowSlurpie/book_search" />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCards
              imgPath={chore}
              title="Jessie's List"
              description="Jessie’s List is an app that allows parents to teach their children the value of working hard and learning responsibility.

              Our application is a platform for parents to track chores that they assign to their children to complete. At a glance a parent will be able to see which chores still need to be completed by their child as well as add more chores to their list by using our user-focused design!
              
              Don't worry about not being able to make it to the chore calendar to see if your child has marked off that their chore is done-- check our app from the comfort of your own device instead!"
              hubLink="https://github.com/thetinaest/chores-app" />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}
export default Projects;