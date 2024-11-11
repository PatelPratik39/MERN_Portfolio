import React from "react";
import { GiAchievement } from "react-icons/gi";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcAutomatic,
  FcReading,
  FcVideoProjector,
  FcVoicePresentation,
  FcManager
} from "react-icons/fc";
import "./Menus.css";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src="./profile.png" alt="Profile Picture" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
              <div className="nav-link">
                <FcAbout />
                About
              </div>
              <div className="nav-link">
                <FcPortraitMode />
                Work Experience
              </div>
              <div className="nav-link">
                <FcAutomatic />
                Tech Stack
              </div>
              <div className="nav-link">
                <FcReading />
                Education
              </div>
              <div className="nav-link">
                <GiAchievement />
                Certifiactions
              </div>
              <div className="nav-link">
                <FcVideoProjector />
                Projects
              </div>
              {/* <div className="nav-link">
                <FcVoicePresentation />
                Testimonial
              </div> */}
              <div className="nav-link">
                <FcManager />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item" key="icons-only">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>
              <div className="nav-link">
                <FcAbout title="About" />
              </div>
              <div className="nav-link">
                <FcPortraitMode title="Work Experience" />
              </div>
              <div className="nav-link">
                <FcAutomatic title="Tech Stack" />
              </div>
              <div className="nav-link">
                <FcReading title="Education" />
              </div>
              <div className="nav-link">
                <GiAchievement title="Certification" />
              </div>
              <div className="nav-link">
                <FcVideoProjector title="Projects" />
              </div>
              {/* <div className="nav-link">
                <FcVoicePresentation title="Testimonial" />
              </div> */}
              <div className="nav-link">
                <FcManager title="Contact" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
