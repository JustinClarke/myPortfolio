// import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
// import axios from "axios";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
//   const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
//   const [spojRank, upadteSpojRank] = useState(0);
//   const [hackerrank, upadteHackerank] = useState(0);
//   const [sem, upadateSem] = useState(0);
//   const [cgpa, upadteCgpa] = useState(0);

//   useEffect(() => {
//     axios
//       .get(uri)
//       .then((res) => {
//         upadteSpojRank(res.data.message[0].spojRank);
//         upadteHackerank(res.data.message[1].hackerrank);
//         upadteCgpa(res.data.message[2].cgpa);
//         upadateSem(res.data.message[3].sem);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href="https://github.com/JustinClarke/JustinClarke/raw/main/resume.pdf" target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
          <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B. Tech. Computer Science Engineering, GITAM, Vizag "
              date="2018 - Present"
              // content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
              content={["CGPA: 7.34"]}
            />
            <Resumecontent
              title="12th Grade [ISC], Timpany School, Vizag"
              date="2016 - 2018"
              content={["Precentage: 81%"]}
            />
            <Resumecontent
              title="10th Grade [ICSE], Timpany School, Vizag"
              date="2006 - 2016"
              content={["Precentage: 92%"]}
            />
            {/* <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Web Development Intern at LiteStore"
              date="April 2021 - present"
              content={[
                "built a responsive website with forms for text and image submission, hosted on firebase (linked to GitHub). The website enables people to list and rent their space to interested parties.",
                "used html, css, javascript and bootstrap",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Achieved 3rd place, at the “World Space Week” organized by
                      Indian Space Research Organization (OCT-2017)."
              content={[]}
            />
            <Resumecontent
              title="98% marks secured for ABRSM graded music exam."
              content={[]}
            />
            <Resumecontent
              title="Joint Secretary at ACM (Association for Computing Machinery) student chapter, GITAM UNIVERSITY."
              content={[]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href="https://github.com/JustinClarke/JustinClarke/raw/main/resume.pdf" target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
