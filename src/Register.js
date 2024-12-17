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
      </div>
    </div>
  );
}

export default Register;
