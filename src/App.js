import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import PreLoader from "./Components/PreLoader/PreLoader.js";
function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading process
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Router>
      {loading ? (
        <PreLoader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
