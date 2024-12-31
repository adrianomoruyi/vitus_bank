import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import Register from "./pages/Register.js";
import Dashboard from "./pages/Dashboard.js";
import Deposit from "./pages/dash-pages/Deposit.js";
import Withdraw from "./pages/dash-pages/Withdraw.js";
import Details from "./pages/dash-pages/Details.js";
import React, { createContext, useContext } from 'react';

//Creating context to allow the User object to be present across all tabs of the dashboard
const UserContext = createContext();

export function UserProvider({ children, user }) {

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}

//Routing the pages of the webapp
function App() {
  return (
    <BrowserRouter basename="/vitus_bank">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="deposit" element={<Deposit />}/>
          <Route path="withdraw" element={<Withdraw />}/>
          <Route path="details" element={<Details />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
