import React from "react";
import './certification.css'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { PiCertificateBold } from "react-icons/pi";

const Certification = () => {
  return (
    <>
      <div className="container certification">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Certifications
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid green" }}
            date="2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificateBold />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Hacker Rank</h4>
            {/* <h6 className="vertical-timeline-element-city">Chicago, IL, USA</h6> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid green" }}
            date="2023"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificateBold />}
          >
            <h3 className="vertical-timeline-element-title">
              AWS Cloud Practitioner
            </h3>
            <h4 className="vertical-timeline-element-subtitle">AWS</h4>
            {/* <h6 className="vertical-timeline-element-city">Chicago, IL, USA</h6> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid green" }}
            date="2023"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificateBold />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Web Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Illinois - Chicago (UIC)
            </h4>
            {/* <h6 className="vertical-timeline-element-city">Chicago, IL, USA</h6> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid green" }}
            date="2023"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificateBold />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Java Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">SimpliLearn</h4>
            {/* <h6 className="vertical-timeline-element-city">Chicago, IL, USA</h6> */}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Certification;
