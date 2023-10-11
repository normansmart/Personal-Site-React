
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Homepage from './pages/Home';
import Vale from "./pages/Vale";
import Regimen from "./pages/Regimen";
import BunkBud from "./pages/BunkBud";

import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        {/* <Navigation /> */}
        <Routes>
          <Route path="" element={<Homepage />} />
          
          {/* <Route path="/" element={<Vale />} /> */}
          {/* <Route path="/" element={<Regimen />} /> */}
          {/* <Route path="/" element={<BunkBud />} /> */}
        </Routes>

      </Router>

    </div>
  );
}

export default App;
