import Layout from "./components/Layout";
import About from "./pages/About/About";
import TechStack from "./pages/TechStack/TechStack";

function App() {
  return (
    <>
      <div>
        <Layout />
        <div className="container">
          <About />
          <TechStack />
        </div>
      </div>
    </>
  );
}

export default App;
