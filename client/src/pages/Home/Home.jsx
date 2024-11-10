import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Pratik_Patel_Resume1.pdf";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h1>Hi👋🏻, I'm a </h1>
          {/* Using Typewrite-effect pakage: npm i typewriter-effect */}
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Software Engineer",
                  "AWS Cloud Practioner"
                ],
                autoStart: true,
                loop: true
              }}
            />
          </h2>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            {/* <button className="btn btn-cv">My Resume </button> */}
            <a
              className="btn btn-cv"
              href={Resume}
              download={"Pratik_Patel_Resume.pdf"}
            >
              My Resume{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
