import './Deposit.css';
import Button from '../../components/Button.js';
import { useOutletContext } from "react-router-dom";
import { useUser } from '../../App.js';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Deposit() {

    //Constants to manage the input and to refresh the parent dashboard
    const [amount, setAmount] = useState("");
    const [account, setAccount] = useState("chequingBalance");
    const { refreshComponent } = useOutletContext();  
  
    //Form submission handler
    const handleSubmit = (event) => {
      //Edge case for maximum amount in an account (with toast)
      if (user.accounts[account] >= 10000000000 || parseInt(amount) >= 10000000000) 
      {
        user.accounts[account] = 10000000000;
        toast.warn('Your balance cannot go higher than $10000000000.00', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
      }
      //Successful deposit (with toast)
      else
      {
        user.accounts[account] += parseInt(amount) || 0;;
        toast.success('Your deposit was successful!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
      }
      //Refresh the amount input and refresh the dashboard
      setAmount("");
      refreshComponent();
    }

    //Keeping the amount input formatting properly for Canadian dollars and cents
    const handleChangeAmount = (e) => {
      if (/^\d*\.?\d{0,2}$/.test(e.target.value)) {
        setAmount(e.target.value);
      }
    };
    
  //Storing the user object with the necessary data  
  const user = useUser();

  return (
    <div className="Deposit">
      <title>Vitus Bank - Dashboard</title> 
      <div className="column">
        <h2>Deposit</h2>
        <form onSubmit={handleSubmit}>
          <select className="dropdown" onChange={(e) => setAccount(e.target.value)} value={account}>
            <option value="chequingBalance">Chequing Account - ${user.accounts.chequingBalance.toFixed(2)}</option>
            <option value="savingsBalance">Savings Account - ${user.accounts.savingsBalance.toFixed(2)}</option>
          </select>
          <input className="long" type="text" name="amount" value={amount} placeholder="Amount" onChange={handleChangeAmount}/>
        </form>
        <Button className="custom-button" style={{marginTop: "10px", marginBottom: "0px", paddingLeft: "40px" , paddingRight: "40px", width: "20vh"}}text='Submit' onClick={handleSubmit}> </Button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Deposit;
