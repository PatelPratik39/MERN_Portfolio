import "./about.css";
// import Jump from "react-reveal/Jump";
import { Bounce } from "react-awesome-reveal";

const About = () => {
  return (
    <>
      <Bounce>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src="./profile.png" alt="Profile_Pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content ">
              <h2 className="text-uppercase">
                <b>About Me</b>
              </h2>
              <p>
                {" "}
                Hello! I’m Pratik Patel, a software engineer with over four
                years of experience specializing in full-stack development with
                a strong focus on Java, Spring Boot, microservices, and RESTful
                APIs. I excel at building scalable, high-performance
                applications, leveraging a microservices architecture to create
                modular, maintainable solutions that are easy to extend and
                deploy.{" "}
              </p>{" "}
              <p>
                {" "}
                My expertise in Spring Boot and REST API development enables me
                to design robust back-end services that integrate seamlessly
                with modern front-end frameworks like React. With React.js, I
                create dynamic and responsive interfaces, ensuring a smooth and
                engaging user experience. My work often bridges the front and
                back ends, allowing for efficient data flow and cohesive
                functionality across applications.{" "}
              </p>{" "}
              <p>
                {" "}
                In addition to Spring Boot and React, I am proficient in the
                MERN stack (MongoDB, Express.js, React, Node.js), giving me the
                versatility to develop fully integrated full-stack applications.
                My command of JavaScript and TypeScript allows me to write
                clean, maintainable code that scales effectively across projects
                of various sizes and requirements.{" "}
              </p>{" "}
              <p>
                {" "}
                I am also passionate about integrating AI-driven features into
                my projects. Using tools like Spring AI and Retrieval-Augmented
                Generation (RAG), I’ve added intelligent, context-aware
                capabilities to applications, allowing them to deliver relevant
                and responsive results for users.{" "}
              </p>{" "}
              <p>
                {" "}
                My experience spans industries such as finance and e-commerce,
                where I have successfully developed solutions utilizing CI/CD
                pipelines, Docker, and cloud deployment platforms to ensure
                optimized infrastructure and continuous integration. I am
                dedicated to producing clean, maintainable code that supports
                long-term scalability and performance.{" "}
              </p>{" "}
              <p>
                {" "}
                I thrive on solving complex challenges and enjoy collaborating
                within innovative teams. Whether it’s refining code quality,
                enhancing UI/UX, or incorporating the latest in AI technology, I
                am committed to delivering solutions that not only meet but
                exceed expectations.{" "}
              </p>
              <p>
                <b>
                  Thank you for stopping by! Feel free to reach out if you’d
                  like to connect or learn more about my work.
                </b>
              </p>
            </div>
          </div>
        </div>
      </Bounce>
    </>
  );
};

export default About;
