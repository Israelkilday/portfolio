// CSS
import './App.css'
// REACT ROUTER DOM
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// COMPONENTS
import Navbar from "./components/Navbar";
// PAGES
import Home from "./pages/Home/Home";

function App() {
  // <img className={darkMode ? 'light-mode-image' : 'dark-mode-image'} src={darkMode ? lightImageSrc : darkImageSrc} alt="Imagem" />


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className={`container ${lightMode ? "light_mode" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
