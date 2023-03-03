import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="lg:w-4/5 w-11/12 m-auto">
      <Navbar />
      <Hero/>
    </div>
  );
}

export default App;
