import Layout from "./components/Layout";
import About from "./pages/About/About";
import Certification from "./pages/Certifiaction/Certification";
import Contact from "./pages/Contacts/Contact";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import "./index.css";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Layout />
        <div className="container">
          <About />
          <TechStack />
          <Experience />
          <Education />
          <Certification />
          <Projects />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>

          <h4 className="text-center" style={{ color: "#138781" }}>
            🧑🏻‍💻 Developed by Pratik Patel 2024 &copy;
          </h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "#138781", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
