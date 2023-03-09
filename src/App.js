import Hero from "./Components/Hero/Hero";
import Portfolio from "./Components/Portfolio/Portfolio";
import Navbar from "./Shared/Navbar/Navbar";
import Title from "./Shared/Title";

function App() {
  return (
    <div className="lg:w-4/5 w-11/12 m-auto ">
      <Navbar />
      <Hero/>
      <Portfolio/>
    </div>
  );
}

export default App;
