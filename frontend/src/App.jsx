import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Sucess from './pages/Sucess';
import NotFound from './pages/NotFound';
import Menu from './pages/Menu';

export const App = () => {
  return (
    <Router>
      <Toaster /> {/* Added Toaster component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sucess" element={<Sucess />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/*" element={<NotFound />} />
        
      </Routes>
    </Router>
  );
};
export default App;
