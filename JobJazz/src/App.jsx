import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home/Home'
import Login from "./pages/AccountHandling/Login.jsx"
import FindWork from './pages/FindWork/FindWork.jsx'; // Assuming correct file path and component name
import FindFreelancer from './pages/FindFreelancers/FindFreelancers.jsx'; // Assuming correct file path and component name
import Register from './pages/AccountHandling/Register.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="findwork" element={<FindWork />} />
        <Route path="findfreelancers" element={<FindFreelancer />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
