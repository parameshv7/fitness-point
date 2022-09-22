import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Coaches from "./pages/Coaches";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import ForWork from "./pages/ForWork";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/coaches" element={<Coaches />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/forwork" element={<ForWork />}></Route>
      </Routes>
    </div>
  );
}

export default App;
