import Layout from "./components/Layout";
import About from "./pages/About/About";
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
        </div>
      </div>
    </>
  );
}

export default App;
