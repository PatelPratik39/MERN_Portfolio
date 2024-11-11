// import React from "react";
import "./education.css";
import { IoMdSchool } from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  // npm i react-vertical-timeline-component
  return (
    <>
      <div className="container education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid green" }}
            date="2022 - 2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Masters in Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              City University of Seattle
            </h4>
            <h6 className="vertical-timeline-element-city">Seattle, WA, USA</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid green" }}
            date="2018 - 2020"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelors in Computer Science with Software Development
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Northern Illinois University
            </h4>
            <h6 className="vertical-timeline-element-city">Dekalb, IL, USA</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid green" }}
            date="2015 - 2018"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Associates in Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Harper College
            </h4>
            <h6 className="vertical-timeline-element-city">
              Palatine, IL, USA
            </h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid green" }}
            date="2009 - 2013"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Diploma in Electronics and Communication Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Gujarat Technological University
            </h4>
            <h6 className="vertical-timeline-element-city">
              {" "}
              Vadodara, Gujarat, INDIA
            </h6>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
