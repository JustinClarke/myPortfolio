import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import ic from "../../Assets/Projects/insta-clone.jpg";
import ls from "../../Assets/Projects/litestore.jpg";
import td from "../../Assets/Projects/todo.jpg";
import qg from "../../Assets/Projects/quote.jpg";
import tg from "../../Assets/Projects/type.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ic}
              isBlog={false}
              title="Instagram Clone"
              description="My attempt at rebuilding Instagram, built with ReactJS, and hosted
              on firebase, this app allows you create an account, post your favourite photos and also comment!"
              link="https://crud-post-app.web.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Textara"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ls}
              isBlog={false}
              title="LiteStore"
              description="Developed and implemented web components across 
              new designs and user interfaces with modern JavaScript frameworks
              ReactJS, and Bootstrap."
              link="https://litestore.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tg}
              isBlog={false}
              title="Typing Game"
              description="Test your typing speed with this interactive app and get scored."
              link="https://typinggame-javascript.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qg}
              isBlog={false}
              title="Quote Generator"
              description="An app that displays a new quote with the twitter api embedded."
              link="https://quotegenerator-website.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={td}
              isBlog={false}
              title="To do list"
              description="An app that allows you to add your very own list of 
              things to do and delete them when you're done."
              link="https://to-do-list-website.netlify.app/"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link=""
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link=""
            />
          </Col> */}
        </Row>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
