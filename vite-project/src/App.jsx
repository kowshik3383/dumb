import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Kow from "./Kow";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/k">Go to About</Link>
        <Link to="/a">Go to Kow</Link>
      </div>
      <Routes>
        <Route path="/k" element={<About />} />
        <Route path="/a" element={<Kow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
