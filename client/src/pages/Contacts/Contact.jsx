import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

import { BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xk-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-vector/contact-us-button_78370-3753.jpg"
                      alt="contact"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6 className="icons">
                        Contact with
                        <a
                          href="https://www.linkedin.com/in/pratikpatel6/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <BsLinkedin
                            color="#0077B5"
                            size={30}
                            className="ms-1"
                          />
                        </a>
                        <a
                          href="https://github.com/PatelPratik39"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <BsGithub color="#24292e" size={30} />
                        </a>
                        <a
                          href="mailto:ptl.pratik717@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <MdEmail color="#4285F4" size={30} />
                        </a>
                        <a
                          href="https://www.hackerrank.com/profile/ptl_pratik717"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <SiHackerrank color="#24292e" size={30} />
                        </a>
                        <a
                          href="https://leetcode.com/u/pratik_3900/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ms-2"
                        >
                          <SiLeetcode color="#f29f67" size={30} />
                        </a>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Enter your Message"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
