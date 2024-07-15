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
import ContestPage from './Components/Contests/ContestPage.jsx';
import TermsContest from './Components/Contests/TermsContest.jsx';
import Submission from './Components/Contests/Submission.jsx';
import ContestGallery from './Components/Contests/ContestGallery.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import SavedList from './Components/SavedList/SavedList.jsx';
import ColorOutput from './Components/AIColorGenerate/ColorOutput.jsx';

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
        <Route path="/contestpage" element={<ContestPage />} />
        <Route path="/contest-terms" element={<TermsContest />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/gallery" element={<ContestGallery />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/register/seller" element={<Signup seller={true} />} />
        <Route path="/savedList" element={<SavedList/>} />
        <Route path="/output" element={<ColorOutput/>} />

    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
