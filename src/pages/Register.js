import Header from '../components/Header.js';
import Button from '../components/Button.js';
import styles from './Register.module.css';
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // Navigate to the Register page
    };

  return (
    <div className={styles.Register}>
      <Header></Header>
      <div className={styles.banner}>
        <h2>Online Banking Registration</h2>
      </div>
      <div className={styles.form}>
        <h3>Please enter your details below</h3>
        <input className={styles.long} type="text" name="name" placeholder="First name"/>
        <input className={styles.long} type="text" name="name" placeholder="Last name"/>
        <input className={styles.long} type="text" name="name" placeholder="Phone number"/>
      <div className={styles.row}>
        <input className={styles.short} type="text" name="name" placeholder="Email address"/>
        <input className={styles.short} type="text" name="name" placeholder="Confirm email address"/>
      </div>  
      <div className={styles.row}>
        <input className={styles.short} type="text" name="name" placeholder="Password"/> 
        <input className={styles.short} type="text" name="name" placeholder="Confirm password"/>
      </div> 
      <Button className="custom-button" style={{marginTop: "10px", marginBottom: "0px"}}text='Submit Registration' onClick={handleClick}></Button>
      </div>
    </div>
  );
}

export default Register;
