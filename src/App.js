import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";

function App() {
// We added some condition that when 
  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.clear();
    });
    return () => {
      window.removeEventListener('beforeunload', () => {
        localStorage.clear();
      });
    };
  }, []);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
