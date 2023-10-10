// REACT ROUTER DOM
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// COMPONENTS
import Navbar from "./components/Navbar";
// PAGES
import Home from "./pages/Home/Home";
// CSS
import './App.css'
// PARTICLES
// import ParticlesBackground from './components/ParticlesBackground'

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <ParticlesBackground /> */}
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route />
            <Route />
            <Route /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
