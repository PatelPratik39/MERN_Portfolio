import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Pratik_Patel_Resume1.pdf";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import "./Home.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="them-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h1>Hi👋🏻, I&apos;m a </h1>
            {/* Using Typewrite-effect pakage: npm i typewriter-effect */}
            <h2>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Software Engineer",
                    "MERN Stack Developer",
                    "AWS Cloud Practioner"
                  ],
                  autoStart: true,
                  loop: true
                }}
              />
            </h2>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="sms:+16303038596"
                rel="noreferrer"
                target="_blank"
                // onMouseDown={(e) => e.currentTarget.blur()}
                onClick={(e) => e.currentTarget.blur()}
              >
                Hire Me
              </a>
              {/* <button className="btn btn-hire">Hire Me</button> */}
              {/* <button className="btn btn-cv">My Resume </button> */}
              <a
                className="btn btn-cv"
                href={Resume}
                download={"Pratik_Patel_Resume.pdf"}
              >
                My Resume{" "}
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
