import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import { ThemeProvider } from "./context/ThemeContext";
import { AnimatePresence } from "framer-motion";
import Teste from "./pages/About/About";

function App() {
  const location = useLocation();
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <div className="container" id="container">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
