import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import Register from "./pages/Register.js";
import Dashboard from "./pages/Dashboard.js";
import Deposit from "./pages/dash-pages/Deposit.js";
import Withdraw from "./pages/dash-pages/Withdraw.js";
import Loan from "./pages/dash-pages/Loan.js";
import Details from "./pages/dash-pages/Details.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="deposit" element={<Deposit />}/>
          <Route path="withdraw" element={<Withdraw />}/>
          <Route path="loan" element={<Loan />}/>
          <Route path="details" element={<Details />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
