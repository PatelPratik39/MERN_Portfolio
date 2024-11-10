import Layout from "./components/Layout";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <div>
        <Layout />
        <div className="container">
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
