import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import AppFotter from './components/AppFotter/AppFotter.jsx';
import AppBar from './components/AppBar/AppBar.jsx';
import Committes from './components/Committes/Committes.jsx';
import Register from './components/Register/Register.jsx';
import Resoures from './components/Resoures/Resoures.jsx';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/committes-agenda" element={<Committes />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resources" element={<Resoures />} />
      </Routes>
      <AppFotter />
    </BrowserRouter>
  );
}

export default App;
