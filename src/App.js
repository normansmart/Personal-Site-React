
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from './pages/Home';
import Vale from "./pages/Vale";
import Regimen from "./pages/Regimen";
import BunkBud from "./pages/BunkBud";

import './App.css';



function App() {

  return (
    <div className="App"  >
      <Router>
     
         
   
     
          <Routes>

            <Route path="/" element={<Homepage />} />

            <Route path="/val" element={<Vale />} />
            <Route path="/regimen" element={<Regimen />} />
            <Route path="/bunkbud" element={<BunkBud />} />

          </Routes>
       
      </Router>

    </div>
  );
}

export default App;
