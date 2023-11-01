// CSS
import './App.css'
// REACT ROUTER DOM
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Routes, Route, useLocation } from "react-router-dom";
// COMPONENTS
import Navbar from "./components/Navbar";
// PAGES
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
// CONTEXT
import { ThemeProvider } from './context/ThemeContext';
// HOOKS
// import { useTransitionsPages } from '../hooks/useTransitionsPages';
// FRAMER MOTION
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <>
      <ThemeProvider >
        {/* <BrowserRouter> */}
        <Navbar />
        <div className="container" >
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </div>
        {/* </BrowserRouter> */}
      </ThemeProvider>
    </>
  );
};

export default App;
