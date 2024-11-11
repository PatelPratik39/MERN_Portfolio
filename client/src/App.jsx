import Layout from "./components/Layout";
import About from "./pages/About/About";
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
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
