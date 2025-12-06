import { Route, Routes } from "react-router-dom";
import Navbar from "./assets/Components/Navbar";
import { Home } from "./assets/Components/Home";
import { About } from "./assets/Components/About";
import Contact from "./assets/Components/Contact";
import { Prouduct } from "./assets/Components/Prouduct";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Prouduct />} />
      </Routes>
    </div>
  );
};

export default App;
