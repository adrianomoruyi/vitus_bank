import Header from './components/Header.js';
import Button from './components/Button.js';
import './Register.css';

function Register() {
  return (
    <div className="Register">
      <Header></Header>
      <div className="banner2">
        <h2>Online Banking Registration</h2>
      </div>
      <div className="form">
        <h3>Please enter your details below</h3>
        <input className="long" type="text" name="name" placeholder="    First name"/>
        <input className="long" type="text" name="name" placeholder="    Last name"/>
        <input className="long" type="text" name="name" placeholder="    Phone number"/>
      <div className="row">
        <input className="short" type="text" name="name" placeholder="    Email address"/>
        <input className="short" type="text" name="name" placeholder="    Confirm email address"/>
      </div>  
      <div className="row">
        <input className="short" type="text" name="name" placeholder="    Password"/> 
        <input className="short" type="text" name="name" placeholder="    Confirm password"/>
      </div> 
      <Button style={{marginTop: "10px", marginBottom: "0px"}}text='Submit Registration'></Button>
      </div>
    </div>
  );
}

export default Register;
