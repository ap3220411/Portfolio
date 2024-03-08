import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "./todo.png"
import Movies_thikana from "./movies_thikana.png"


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
              description="✨ Secure authentication (JWT, bcrypt)
              📧 Email functionality via Nodemailer
              🗂️ Task management: create, delete, mark as completed
              📱 Responsive design for a seamless user experience."
              ghLink="https://github.com/ap3220411/Todo-frontend"
              demoLink="https://todo-frontend-ashen.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movies_thikana}
              isBlog={false}
              title="Chatify"
              description="
              📱 Responsive design for a seamless user experience.
              Useing React.js and Css only"
              ghLink="https://github.com/ap3220411/Movies_thikana"
              demoLink="https://movies-thikana.vercel.app"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
