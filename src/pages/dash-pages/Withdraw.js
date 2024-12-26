import Header from '../../components/Header.js';
import './Withdraw.css';
import Button from '../../components/Button.js';
import { Outlet, useNavigate } from "react-router-dom";

function Withdraw() {
  return (
    <div className="Withdraw">
      <title>Vitus Bank - Dashboard</title> 
     <div className="column">
             <h2>Withdraw</h2>
             <input className="long" type="text" name="name" placeholder="Account"/>
             <input className="long" type="text" name="name" placeholder="Amount"/>
             <Button className="custom-button" style={{marginTop: "10px", marginBottom: "0px", paddingLeft: "40px" , paddingRight: "40px", width: "20%"}}text='Submit'> </Button>
           </div>
    </div>
  );
}

export default Withdraw;
