import Header from '../components/Header.js';
import './Dashboard.css';
import Button from '../components/Button.js';
import { Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
    
    const navigate = useNavigate();

    const handleClick = (path) => {
      navigate(path);
      };
    
  return (
    <div className="Dashboard">
      <title>Vitus Bank - Dashboard</title>
      <Header text={"Welcome back, User"}></Header>
      
      <div className="dashbanner">
        <div className="balance"><h3>Chequing: $5,000.00</h3></div>
        <div className="balance"><h3>Savings: $5,000.00</h3></div>
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
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
