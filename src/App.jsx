// CSS
import './App.css'
// REACT ROUTER DOM
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
// COMPONENTS
import Navbar from "./components/Navbar";
import Transition from "./components/Transition"
// PAGES
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
// CONTEXT
import { ThemeProvider } from './context/ThemeContext';
// FRAMER MOTION
import { AnimatePresence } from 'framer-motion';

function App() {


  return (
    <>
      <ThemeProvider >
        <BrowserRouter>
          <Navbar />
          <div className="container" >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutWithTransition />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

const AboutWithTransition = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <About key={location.pathname} />
      <Transition />
    </AnimatePresence>
  );
};



export default App;
