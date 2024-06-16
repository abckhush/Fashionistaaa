import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/SignUp.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import ColorGenerateHome from './Components/AIColorGenerate/ColorGenerateHome.jsx';
import InputColorGenerator from './Components/AIColorGenerate/InputColorGenerator.jsx';
import Contests from './Components/Contests/Contests.jsx';
import Designs from './Components/Designs/Designs.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colorGenerate" element={<ColorGenerateHome />} />
        <Route path='/inputColorGenerate' element={<InputColorGenerator/>}/>
        <Route path='/contests' element={<Contests/>}/>
        <Route path='/generateDesigns' element={<Designs/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
