import { Route, Routes } from "react-router-dom";
import Navbar from "./assets/Components/Navbar";
import { Home } from "./assets/Components/Home";
import { About } from "./assets/Components/About";
import Contact from "./assets/Components/Contact";
import { Prouduct } from "./assets/Components/Prouduct";
import NotFound from "./assets/Components/NotFound";
import Men from "./assets/Components/Men";
import Women from "./assets/Components/Women";
import Kids from "./assets/Components/Kids";
import Footer from "./assets/Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Prouduct />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
