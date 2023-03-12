import { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import Hero from "./Components/Hero/Hero";
import Portfolio from "./Components/Portfolio/Portfolio";
import Navbar from "./Shared/Navbar/Navbar";
import { motion } from "framer-motion"
import Screen from "./Shared/AnimatedScreen/Screen";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";

const spinner = <CirclesWithBar
  height="110"
  width="110"
  color="#46556b"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
/>

function App() {
  const [loading, setLoading] = useState(true)
  const [intro, setIntro] = useState(false)
  useEffect(() => {
    if (intro) {
      const subscript = setTimeout(() => {
        setLoading(false)
      }, 5000);
    }
  }, [intro])

  console.log(loading)

  return (
    <div id='home'>
      <div className="lg:w-4/5 w-11/12 m-auto ">
        {
          loading && intro && <motion.div className="min-h-screen flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {spinner}
          </motion.div>
        }
        {
          !loading && intro &&
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <Hero />
            <About />
            <Portfolio />
            <Skills />
          </motion.div>
        }

      </div>
      {
        !intro && <Screen intro={intro} setIntro={setIntro} />
      }
    </div>
  );
}

export default App;
