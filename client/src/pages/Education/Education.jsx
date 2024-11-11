import React from "react";
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
            <h4 className="vertical-timeline-element-subtitle">Seattle, WA</h4>
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
            <h4 className="vertical-timeline-element-subtitle">Dekalb, IL</h4>
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
            <h4 className="vertical-timeline-element-subtitle">Palatine, IL</h4>
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
            <h4 className="vertical-timeline-element-subtitle">Gujarat, IN</h4>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
