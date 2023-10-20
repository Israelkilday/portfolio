// CSS
import './App.css'
// REACT ROUTER DOM
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// COMPONENTS
import Navbar from "./components/Navbar";
// import Transition from './components/Transition';
// PAGES
import Home from "./pages/Home/Home";
// CONTEXT
import { ThemeProvider } from './context/ThemeContext';
// GSAP
// import gsap from 'gsap';

function App() {
  // const transitionPages = gsap.timeline();

  return (
    <>
      <ThemeProvider >
        <BrowserRouter>
          {/* <Transition timeline={transitionPages} /> */}
          <Navbar />

          <div className="container" >
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>

    </>
  )
}

export default App;
