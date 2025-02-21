import React from "react";
import "./certification.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { PiCertificateBold } from "react-icons/pi";

const Certification = () => {
  return (
    <>
      <div className="container certification" id="certification">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Certifications
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid green" }}
            date="2025"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificateBold />}
          >
            <h3 className="vertical-timeline-element-title">
              <a href="https://aws.amazon.com/verification">
                AWS AI Practitioner
              </a>
              <p>validation code: 93089ad51a9d49fe952c4474e5405ab9</p>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">AWS</h4>
            {/* <h6 className="vertical-timeline-element-city">Chicago, IL, USA</h6> */}
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid green" }}
            date="2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificateBold />}
          >
            <h3 className="vertical-timeline-element-title">
              <a href="https://www.hackerrank.com/certificates/f016c024f73a">
                Software Engineer
              </a>
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
              <a href="https://www.credly.com/badges/520191ce-0ef5-41e1-9148-49328259daf0/linked_in_profile">
                AWS Cloud Practitioner
              </a>
              <p>validation code: 2F87QWQ27BEQ1XGT</p>
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
              <a href="https://success.simplilearn.com/1836795f-f40a-4530-95f3-2b3018c89492">
                Full Stack Java Developer
              </a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">SimpliLearn</h4>
            {/* <h6 className="vertical-timeline-element-city">Chicago, IL, USA</h6> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid green" }}
            date="2021"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificateBold />}
          >
            <h3 className="vertical-timeline-element-title">
              Infosys certified ReactJs Developer - Associate
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Infosys</h4>
            {/* <h6 className="vertical-timeline-element-city">Chicago, IL, USA</h6> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid green" }}
            date="2021"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<PiCertificateBold />}
          >
            <h3 className="vertical-timeline-element-title">
              Infosys certified Java SpringBoot using REST API - Associate
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Infosys</h4>
            {/* <h6 className="vertical-timeline-element-city">Chicago, IL, USA</h6> */}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Certification;
