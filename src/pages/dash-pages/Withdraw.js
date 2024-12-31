import './Withdraw.css';
import Button from '../../components/Button.js';
import { useOutletContext } from "react-router-dom";
import { useUser } from '../../App.js';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Withdraw() {
    //Constants to manage the input and to refresh the parent dashboard
    const [amount, setAmount] = useState("");
    const [account, setAccount] = useState("chequingBalance");
    const { refreshComponent } = useOutletContext();  
  
    const handleSubmit = (event) => {
      //Edge case for minimum amount in an account (with toast)
      if (user.accounts[account] === 0 || parseInt(amount) > user.accounts[account]) 
        {
          user.accounts[account] = 0;
          toast.warn('Your balance cannot go lower than $0.00', {
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
        else
        {
          //Successful withdrawal (with toast)
          user.accounts[account] -= parseInt(amount) || 0;;
          toast.success('Your withdrawal was successful!', {
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
    <div className="Withdraw">
      <title>Vitus Bank - Dashboard</title> 
      <div className="column">
        <h2>Withdraw</h2>
        <form onSubmit={handleSubmit}>
          <select className="dropdown" onChange={(e) => setAccount(e.target.value)} value={account}>
            <option value="chequingBalance">Chequing Account - ${user.accounts.chequingBalance.toFixed(2)}</option>
            <option value="savingsBalance">Savings Account - ${user.accounts.savingsBalance.toFixed(2)}</option>
          </select>
          <input className="long" type="text" name="amount" value={amount} placeholder="Amount" onChange={handleChangeAmount}/>
        </form>
          <Button className="custom-button" style={{marginTop: "10px", marginBottom: "0px", paddingLeft: "40px" , paddingRight: "40px", width: "20%"}}text='Submit' onClick={handleSubmit}> </Button>
        </div>
        <ToastContainer />
    </div>
  );
}

export default Withdraw;
