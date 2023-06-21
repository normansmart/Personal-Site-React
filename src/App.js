
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import Homepage from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />

        </Routes>

      </Router>

    </div>
  );
}

export default App;
