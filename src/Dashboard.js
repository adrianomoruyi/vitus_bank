import Header from './components/Header.js';
import './Dashboard.css';
import { useNavigate } from "react-router-dom";

function Dashboard() {
    
    const navigate = useNavigate();

  return (
    <div className="Dashboard">
      <Header text={"Welcome back, User"}></Header>
      <div className="dashbanner">

      </div>
      <div className="row">
        <div className="sidebar"></div>

      </div>
    </div>
  );
}

export default Dashboard;
