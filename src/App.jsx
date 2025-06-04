import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SkillCard from "./components/SkillCard";
import Footer from "./components/Footer";
import Certifications from "./pages/certifications";

function App() {
  return (
    <Router>
      <div className="pt-20">
        {" "}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<SkillCard />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
