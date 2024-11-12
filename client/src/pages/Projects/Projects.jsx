import Spin from "react-reveal/Spin";
import "./project.css";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          &ldquo; Explore my portfolio of technical projects where I’ve combined
          front-end and back-end technologies to create robust, user-centric
          applications. From seamless user interfaces to efficient data
          handling, each project reflects my passion for building scalable
          solutions with technologies like Java, Spring Boot, React, and
          microservices. Dive into the details to see how I leverage modern
          frameworks, cloud services, and data structures to solve complex
          problems and enhance user experiences. &rdquo;
        </p>
        {/* card Design */}
        <div
          id="projectCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <Spin>
            <div className="carousel-inner">
              {/* First Slide with 3 Projects */}
              <div className="carousel-item active">
                <div className="row" id="ads">
                  <div className="col-md-4">
                    <div className="card rounded">
                      <div className="card-image">
                        <span className="card-notify-badge">
                          MERN Full Stack
                        </span>
                        <img src="/Blogzz_HomePage.png" alt="project1" />
                      </div>
                      <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">NodeJs</span>
                        <span className="card-detail-badge">ExpressJs</span>
                        <span className="card-detail-badge">ReactJs</span>
                        <span className="card-detail-badge">MongoDB</span>
                      </div>
                      <div className="card-body text-center">
                        <div className="m-auto ad-title ">
                          <h5 className="text-uppercase">BlogZ App</h5>
                        </div>
                        <a
                          className="ad-btn"
                          href="https://blogz-capstone-37d7b6e650dc.herokuapp.com/login"
                        >
                          {" "}
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card rounded">
                      <div className="card-image">
                        <span className="card-notify-badge">
                          MERN Full Stack
                        </span>
                        <img src="home1.png" alt="project2" />
                      </div>
                      <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">NodeJs</span>
                        <span className="card-detail-badge">ExpressJs</span>
                        <span className="card-detail-badge">ReactJs</span>
                        <span className="card-detail-badge">MongoDB</span>
                      </div>
                      <div className="card-body text-center">
                        <div className="m-auto ad-title ">
                          <h5 className="text-uppercase">Reel Review App</h5>
                        </div>
                        <a
                          className="ad-btn"
                          href="https://reelreviewapp.onrender.com"
                        >
                          {" "}
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card rounded">
                      <div className="card-image">
                        <span className="card-notify-badge">
                          Java Full Stack
                        </span>
                        <img src="image6.png" alt="project3" />
                      </div>
                      <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">Java</span>
                        <span className="card-detail-badge">SpringBoot</span>
                        <span className="card-detail-badge">ReactJs</span>
                        <span className="card-detail-badge">Docker</span>
                        <span className="card-detail-badge">OpenAI</span>
                        {/* <span className="card-detail-badge">Olama</span> */}
                      </div>
                      <div className="card-body text-center">
                        <div className="m-auto ad-title ">
                          <h5 className="text-uppercase">Tinder AI App</h5>
                        </div>
                        <a
                          className="ad-btn"
                          href="https://github.com/PatelPratik39/TinderApp_AI"
                        >
                          {" "}
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row" id="ads">
                  <div className="col-md-4">
                    <div className="card rounded">
                      <div className="card-image">
                        <span className="card-notify-badge">MERN Stack</span>
                        <img src="image3.png" alt="project4" />
                      </div>
                      <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">NodeJs</span>
                        <span className="card-detail-badge">ExpressJs</span>
                        <span className="card-detail-badge">ReactJs</span>
                        <span className="card-detail-badge">MongoDB</span>
                      </div>
                      <div className="card-body text-center">
                        <div className="m-auto ad-title ">
                          <h5 className="text-uppercase">Url Shortner App</h5>
                        </div>
                        <a
                          className="ad-btn"
                          href="https://github.com/PatelPratik39/UrlShortner_MERN"
                        >
                          {" "}
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card rounded">
                      <div className="card-image">
                        <span className="card-notify-badge">
                          {" "}
                          MERN Full Stack
                        </span>
                        <img src="image4.png" alt="project5" />
                      </div>
                      <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">NodeJs</span>
                        <span className="card-detail-badge">ExpressJs</span>
                        <span className="card-detail-badge">ReactJs</span>
                        <span className="card-detail-badge">MongoDB</span>
                      </div>
                      <div className="card-body text-center">
                        <div className="m-auto ad-title ">
                          <h5 className="text-uppercase">
                            GenAI Image-Recipe Generator App
                          </h5>
                        </div>
                        <a
                          className="ad-btn"
                          href="https://github.com/PatelPratik39/SpringAI"
                        >
                          {" "}
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card rounded">
                      <div className="card-image">
                        <span className="card-notify-badge">
                          Java Full Stack
                        </span>
                        <img src="/store1.png" alt="project6" />
                      </div>
                      <div className="card-image-overly m-auto mt-3">
                        <span className="card-detail-badge">Java</span>
                        <span className="card-detail-badge">SpringBoot</span>
                        <span className="card-detail-badge">ReactJs</span>
                        <span className="card-detail-badge">TypeScript</span>
                        <span className="card-detail-badge">Docker</span>
                      </div>
                      <div className="card-body text-center">
                        <div className="m-auto ad-title ">
                          <h5 className="text-uppercase">
                            Sports Center Web App
                          </h5>
                        </div>
                        <a
                          className="ad-btn"
                          href="https://github.com/PatelPratik39/SportCenterApp_SpringBoot_React"
                        >
                          {" "}
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#projectCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
