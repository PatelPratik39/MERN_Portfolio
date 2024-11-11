import React from "react";
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
      <div className="experience">
        <div className="container work">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline>
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
                Infosys Limited
              </h4>
              <h6 className="vertical-timeline-element-city">Lisle, IL, USA</h6>
              {/* Add work experience based on Infosys project */}
              <p>
                - Developed and optimized front-end applications using
                JavaScript and ReactJS, leading to a 25% increase in customer
                satisfaction.
                <br />- Automated testing and deployment using Java, Selenium,
                and Jenkins, reducing manual efforts by 40% and improving
                overall project efficiency.
                <br />- Leveraged AWS services to deploy applications in the
                cloud, enhancing scalability and security, and implemented
                monitoring for high availability.
                <br />- Created comprehensive unit and integration tests,
                achieving 95% code coverage and ensuring reliability.
                <br />- Played a critical role in the release of 7 major
                projects, collaborating with cross-functional teams to
                troubleshoot, implement features, and meet deadlines.
                <br />- Awarded the “Best Collaborator” for exceptional
                contributions and domain expertise.
              </p>
              <p>
                <strong>Tech Stack:</strong> Java, Springboot, JavaScript, ReactJS,
                Angular, Selenium, Jenkins, AWS, RESTful APIs, NodeJS
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid green" }}
              date="Septmber 2021 - April 2024"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<MdOutlineWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer III
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                American Express
              </h4>
              <h6 className="vertical-timeline-element-city">Lisle, IL, USA</h6>
              {/* Add work experience based on Amex project */}
              <p>
                - Enhanced user interfaces and user experiences, developing
                React-based solutions to improve performance and code
                maintainability.
                <br />- Focused on defect resolution and code coverage
                improvements, increasing codebase reliability and
                maintainability.
                <br />- Contributed to API development and integration,
                assisting with functional schema design to enhance data handling
                and ensure efficient service interaction.
                <br />- Created technical documentation and functional schemas,
                supporting project transparency, knowledge sharing, and team
                onboarding.
                <br />- Actively contributed to quality assurance during major
                project releases, ensuring high standards and meeting project
                requirements.
                <br />- Collaborated closely with cross-functional teams to
                troubleshoot issues and release key application updates on
                schedule.
                <br />- Awarded the "Domain Maestro" for exceptional
                contributions and domain expertise.
              </p>
              <p>
                <strong>Tech Stack:</strong> Java,Springboot, ReactJS, Selenium, AWS,
                Jenkins, REST APIs, Docker, MongoDB, Kafka, Cassandra, Rally,
                Confluence
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid green" }}
              date="Septmber 2020 - March 2021"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<MdOutlineWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Sears Holdings Corporation
              </h4>
              <h6 className="vertical-timeline-element-city">
                Hoffman Estates, IL, USA
              </h6>
              {/* Add work experience based on Sears project */}
              <p>
                - Developed and maintained Java-based applications using Spring
                Boot, ensuring code quality through JUnit testing.
                <br />- Optimized database interactions with Hibernate,
                improving application performance by 20%.
                <br />- Designed and implemented scalable application
                architectures, transforming design specifications into
                functional code.
                <br />- Created complex SQL queries, enhancing data persistence
                and achieving performance improvements of up to 30%.
                <br />- Streamlined deployment processes by implementing CI/CD
                pipelines with Jenkins and AWS CodeDeploy, reducing deployment
                time by 50%.
                <br />- Provided ongoing support, troubleshooting, and
                enhancements to meet client requirements and project timelines.
              </p>
              <p>
                <strong>Tech Stack:</strong> Java, Spring Boot, Hibernate,
                MySQL, JUnit, Jenkins, Jira
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
