import { Bounce } from "react-awesome-reveal";
import projectsData from "../../assets/data/projectsData" // Import project data
import "./project.css";

const Projects = () => {
  // Group projects into sets of 3 for the carousel
  const chunkSize = 3;
  const projectChunks = [];
  for (let i = 0; i < projectsData.length; i += chunkSize) {
    projectChunks.push(projectsData.slice(i, i + chunkSize));
  }

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
          applications. &rdquo;
        </p>

        {/* Project Carousel */}
        <div
          id="projectCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <Bounce>
            <div className="carousel-inner">
              {projectChunks.map((chunk, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="row" id="ads">
                    {chunk.map((project) => (
                      <div className="col-md-4" key={project.id}>
                        <div className="card rounded">
                          <div className="card-image">
                            <span className="card-notify-badge">
                              {project.description}
                            </span>
                            <img src={project.image} alt={project.title} />
                          </div>
                          <div className="card-image-overly m-auto mt-3">
                            {project.badges.map((badge, idx) => (
                              <span key={idx} className="card-detail-badge">
                                {badge}
                              </span>
                            ))}
                          </div>
                          <div className="card-body text-center">
                            <div className="m-auto ad-title">
                              <h5 className="text-uppercase">
                                {project.title}
                              </h5>
                            </div>
                            <a
                              className="ad-btn"
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
            </div>
          </Bounce>
        </div>
      </div>
    </>
  );
};

export default Projects;
