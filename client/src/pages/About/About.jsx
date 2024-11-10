import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src="./profile.png" alt="Profile_Pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>
              <b>About Me</b>
            </h1>
            <p>
              Hello! I’m Pratik Patel, a software engineer with over four years
              of experience in creating high-quality, scalable web applications.
              My expertise spans both front-end and back-end development,
              utilizing technologies like Java Spring Boot, React, Node.js,
              JavaScript, TypeScript, and AWS to design innovative solutions
              that prioritize performance and user experience.
            </p>
            <p>
              I'm proficient in the MERN stack (MongoDB, Express.js, React,
              Node.js), which allows me to build full-stack applications with
              seamless integration between the front-end and back-end. My strong
              command of JavaScript and TypeScript enables me to write clean,
              maintainable code and develop dynamic, responsive user interfaces.
            </p>
            <p>
              With a keen interest in generative AI, I’ve integrated AI-driven
              capabilities into my projects, leveraging frameworks like Spring
              AI and Retrieval-Augmented Generation (RAG) to enhance application
              intelligence and responsiveness. This approach allows me to build
              solutions that efficiently retrieve and process information,
              delivering accurate and contextually relevant results for users in
              real-time.
            </p>
            <p>
              My work spans diverse industries, including finance and
              e-commerce, and I have a proven track record of creating impactful
              solutions. I’m experienced in building robust APIs, microservices,
              and full-stack applications with a focus on maintainable, clean
              code. Additionally, I bring expertise in CI/CD pipelines, Docker
              containerization, and cloud deployment, ensuring seamless
              integration and optimized infrastructure.
            </p>
            <p>
              I thrive on solving complex problems and collaborating with teams
              that value innovation. Whether it’s improving code coverage,
              enhancing UI/UX, or incorporating the latest in generative AI
              technologies, I am committed to delivering solutions that not only
              meet requirements but exceed expectations.
            </p>
            <p>
              <b>
                Thank you for stopping by! Feel free to reach out if you’d like
                to connect or learn more about my work.
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
