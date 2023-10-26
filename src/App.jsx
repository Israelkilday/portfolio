// CSS
import './App.css'
// REACT ROUTER DOM
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// COMPONENTS
import Navbar from "./components/Navbar";
// PAGES
import Home from "./pages/Home/Home";
// CONTEXT
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider >
        <BrowserRouter>
          <Navbar />

          <div className="container" >
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
