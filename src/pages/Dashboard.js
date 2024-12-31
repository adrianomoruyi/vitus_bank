import Header from '../components/Header.js';
import { UserProvider } from '../App.js';
import './Dashboard.css';
import Button from '../components/Button.js';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';

function Dashboard() {
  
    //Definiting constants, including the data from the main page
    const {state} = useLocation();
    const user = state.data;
    const navigate = useNavigate();
    
    //Navigates to subpages with the user data
    const handleClick = (path) => {
      navigate(path, {state: {data: user}});
      };

    //System to refresh the main dashboard; is used in the deposit and withdrawal pages when the balances are changed.
    const [count, setCount] = useState(0);
    const refreshComponent = () => {
    setCount((prev) => prev + 1);
    };

  return (
    <UserProvider user={user}>
      <div className="Dashboard">
        <title>Vitus Bank - Dashboard</title>
        <Header text={`Welcome back, ${user.name}`}></Header>
      
        <div className="dashbanner">
          <div className="balance"><h3>Chequing: ${user.accounts.chequingBalance.toFixed(2)}</h3></div>
          <div className="balance"><h3>Savings: ${user.accounts.savingsBalance.toFixed(2)}</h3></div>
        </div>
        <div className="row">
          <div className="sidebar">
            <div>
              <Button className="tab" text='Deposit' onClick={() => handleClick("/dashboard/deposit")}></Button>
              <Button className="tab" text='Withdraw' onClick={() => handleClick("/dashboard/withdraw")}></Button>
              <Button className="tab" text='Account Details' onClick={() => handleClick("/dashboard/details")}></Button>
            </div>
            <Button className="tab2" text='Log Out' onClick={() => handleClick("/")}></Button>
          </div>
          <Outlet context={{refreshComponent}}/>
        </div>
      </div>
    </UserProvider>
  );
}

export default Dashboard;
