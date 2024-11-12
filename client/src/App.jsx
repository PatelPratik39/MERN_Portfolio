import Layout from "./components/Layout";
import About from "./pages/About/About";
import Certification from "./pages/Certifiaction/Certification";
import Contact from "./pages/Contacts/Contact";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/TechStack/TechStack";

function App() {
  return (
    <>
      <div>
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
        <div className="footer">
          <h4 className="text-center">Developed by Pratik Patel 2024 &copy;</h4>
        </div>
      </div>
    </>
  );
}

export default App;
