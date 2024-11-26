import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QueryPage from './QueryPage.js';
import Home from "./Home.js";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/query" element={<QueryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
