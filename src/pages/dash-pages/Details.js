import Header from '../../components/Header.js';
import './Details.css';
import Button from '../../components/Button.js';
import { Outlet, useNavigate } from "react-router-dom";

function Details() {
  return (
    <div className="Details">
      <title>Vitus Bank - Dashboard</title> 
      <div className="column">
        <h2>Account Details</h2>
        <div></div>
        <h3>Full Name</h3>
        <h4>Full Name</h4>
        <h3>Phone Number</h3>
        <h4>Full Name</h4>
        <h3>Email Address</h3>
        <h4>Full Name</h4>
      </div>
    </div>
  );
}

export default Details;
