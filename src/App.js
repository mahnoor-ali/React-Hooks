import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/Home/Home.js';
import AboutUs from './components/AboutUs/AboutUs.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={ <HomePage/>}/>
        <Route path="/About" element ={ <AboutUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
