import { Fade, Bounce } from "react-awesome-reveal";
// import "./techStack1.css"
import "./techStack.css";
import { TechStackList } from "../../utils/TechStackList.jsx";

const TechStack1 = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <Bounce>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technology Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉🏻 Including programming Language, Frameworks, Database, Front-end
            and Back-end technologies and APIs
          </p>
        </Bounce>
        <div className="row">
          {TechStackList.map((tech) => (
            // <Fade right key={tech._id}>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            // </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack1;
