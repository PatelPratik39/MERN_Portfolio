// import React from "react";
import "./experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";

const Experience = () => {
  return (
    <>
      <div className="experience" id="experience">
        <div className="container work">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline>
            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid green" }}
              date="May 2024 - Present"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<MdOutlineWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Wells Fargo
              </h4>
              <h6 className="vertical-timeline-element-city">Chicago, IL</h6>
              <p>
                - Collaborated with stakeholders to gather requirements and
                align with Agile processes.
                <br />- Designed backend architecture using Spring Boot, Java
                11, Oracle SQL, and Microservices.
                <br />- Integrated AWS services (S3, Lambda, RDS) and Kafka for
                cloud scalability and asynchronous processing.
                <br />- Implemented OAuth 2.0 and JWT authentication for secure
                APIs.
                <br />- Utilized Liquibase and Elasticsearch for schema
                versioning and real-time analytics.
                <br />- Wrote unit tests with JUnit5/Mockito using TDD; enforced
                best practices via code reviews.
                <br />- Used Docker, Kubernetes, Jenkins, and BitBucket for
                CI/CD and container orchestration.
                <br />- Optimized performance through refactoring and proactive
                bug fixes.
              </p>
              <p>
                <strong>Tech Stack:</strong> Java 17, Spring Boot,
                Microservices, AWS (S3, Lambda, RDS), Kafka, OAuth 2.0, JWT,
                Liquibase, Elasticsearch, JUnit5, Mockito, Docker, Kubernetes,
                Jenkins, BitBucket
              </p>
            </VerticalTimelineElement> */}

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid green" }}
              date="March 2021 - August 2024"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<MdOutlineWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Technology Analyst
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Infosys (Client: American Express)
              </h4>
              <h6 className="vertical-timeline-element-city">Chicago, IL</h6>
              <p>
                - Built full-stack apps with Java Spring Boot and ReactJS,
                improving customer satisfaction by 25%.
                <br />- Created RESTful APIs and optimized React frontend for
                scalable user experience.
                <br />- Used Docker and Jenkins for deployment and CI/CD
                automation.
                <br />- Wrote unit tests using Jest and JUnit achieving 95% code
                coverage.
                <br />- Represented team during global release, taking on QA
                responsibilities.
                <br />- Delivered 7+ projects collaborating with
                cross-functional teams.
              </p>
              <p>
                <strong>Tech Stack:</strong> Java, Spring Boot, ReactJS, RESTful
                APIs, Docker, Jenkins, Jest, JUnit
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid green" }}
              date="September 2020 - March 2021"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<MdOutlineWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Java Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Sears Holdings Corporation
              </h4>
              <h6 className="vertical-timeline-element-city">
                Hoffman Estates, IL
              </h6>
              <p>
                - Developed Spring Boot backend applications with JUnit testing.
                <br />- Implemented REST APIs and improved MySQL performance
                using Hibernate.
                <br />- Boosted app efficiency with complex SQL queries and
                scalable architecture.
                <br />- Deployed using Jenkins CI/CD, cutting deployment time by
                50%.
                <br />- Delivered ongoing support and enhancements to meet
                business goals.
              </p>
              <p>
                <strong>Tech Stack:</strong> Java, Spring Boot, Hibernate,
                MySQL, JUnit, Jenkins
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
