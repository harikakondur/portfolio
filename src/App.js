import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;