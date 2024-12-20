import Header from './components/Header.js';
import Button from './components/Button.js';
import styles from './Register.module.css';

function Register() {
  return (
    <div className={styles.Register}>
      <Header></Header>
      <div className={styles.banner}>
        <h2>Online Banking Registration</h2>
      </div>
      <div className={styles.form}>
        <h3>Please enter your details below</h3>
        <input className={styles.long} type="text" name="name" placeholder="    First name"/>
        <input className={styles.long} type="text" name="name" placeholder="    Last name"/>
        <input className={styles.long} type="text" name="name" placeholder="    Phone number"/>
      <div className={styles.row}>
        <input className={styles.short} type="text" name="name" placeholder="    Email address"/>
        <input className={styles.short} type="text" name="name" placeholder="    Confirm email address"/>
      </div>  
      <div className={styles.row}>
        <input className={styles.short} type="text" name="name" placeholder="    Password"/> 
        <input className={styles.short} type="text" name="name" placeholder="    Confirm password"/>
      </div> 
      <Button style={{marginTop: "10px", marginBottom: "0px"}}text='Submit Registration'></Button>
      </div>
    </div>
  );
}

export default Register;
