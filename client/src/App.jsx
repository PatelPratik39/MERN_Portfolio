import Layout from "./components/Layout";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
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
          
          <Projects />
          <Education />
        </div>
      </div>
    </>
  );
}

export default App;
