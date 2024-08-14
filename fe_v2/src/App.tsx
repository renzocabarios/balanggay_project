import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <Routes>
        {/* <Route path={"/"} element={<HomePage />} />
        <Route path={"/about/"} element={<About />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
