import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aiTripPlanner from "../../Assets/Projects/tripplanner.png";
import jobInsider from "../../Assets/Projects/jobinsider.PNG";
import chatify from "../../Assets/Projects/chatify.png";
import covidManagement from "../../Assets/Projects/covid.png";
import bookHeaven from "../../Assets/Projects/bookheaven.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Kajal-Tiwari-22/Chat-application"
              demoLink="https://chat-buddy23.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookHeaven}
              isBlog={false}
              title="Book-Heaven"
              description="A full-stack Book Application built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to browse, search, and manage books with user authentication and real-time CRUD functionality."
              ghLink="https://github.com/Kajal-Tiwari-22/Book-selling-app"
              demoLink="https://bookheaven23.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobInsider}
              isBlog={false}
              title="Job-Insider"
              description="A full-stack Job Portal that enables users to search and apply for jobs, while employers can post job listings and manage applications with secure authentication and real-time updates."
              ghLink="https://github.com/Kajal-Tiwari-22/Job-insider"
              demoLink="https://job-insider-eight.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiTripPlanner}
              isBlog={false}
              title="AI Trip Planner"
              description="​An AI-powered Trip Planner that generates personalized itineraries based on user preferences, budget, and travel dates, offering tailored recommendations for destinations, accommodations, and activities."
              ghLink="https://github.com/Kajal-Tiwari-22/Tour-travel"
            /*  demoLink="https://plant49-ai.herokuapp.com/"*/
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covidManagement}
              isBlog={false}
              title="Covid-Management"
              description="​A COVID-19 Management System designed to streamline patient registration, test scheduling, and result tracking, providing real-time dashboards for administrators to monitor testing data, vaccination status, and compliance with health protocols."
              ghLink="https://github.com/Kajal-Tiwari-22/Covid-Management-"
             />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
