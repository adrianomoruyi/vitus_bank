import Header from './components/Header.js';
import Button from './components/Button.js';
import './Register.css';

function Register() {
  return (
    <div className="Home">
      <Header></Header>
      <div className="banner">
        <h2>Online Banking Registration</h2>
        <Button text='Register Today!'></Button>
      </div>
    </div>
  );
}

export default Register;
