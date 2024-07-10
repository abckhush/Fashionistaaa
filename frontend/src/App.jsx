import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Login from './Components/Register/Login.jsx';
import Signup from './Components/Register/SignUp.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import ColorGenerateHome from './Components/AIColorGenerate/ColorGenerateHome.jsx';
import InputColorGenerator from './Components/AIColorGenerate/InputColorGenerator.jsx';
import Contests from './Components/Contests/Contests.jsx';
import Designs from './Components/Designs/Designs.jsx';
import Footer from './Components/Footer/Footer.jsx';
import ProductPage from './Components/Home/ProductPage.jsx';
import VerifyOTP from './Components/Register/VerifyOTP.jsx';
import Register from './Components/Register/Register.jsx';

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
        <Route path="/verifyOTP" element={<VerifyOTP/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/designInfo" element={<ProductPage />} />
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
