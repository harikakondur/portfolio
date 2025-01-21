import './App.css';
import {Route, Routes} from 'react-router';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (

    <Routes basename="/portfolio">
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  );
}

export default App;
