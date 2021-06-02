import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Justin Clarke </span>
            from <span className="purple"> India.</span>
            <br />I'm a third year Computer Science Engineering Student,<br/> at GITAM, Vizag
            <br />
            <br />
            Apart from coding, some other stuff that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              - exloring new places around the city
            </li>
            <li className="about-activity">
              - write Tech Blogs
            </li>
            <li className="about-activity">
              - oh, and I play guitar too
            </li>
          </ul>

          {/* <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
