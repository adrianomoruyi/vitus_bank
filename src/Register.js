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
        <input style={{
          fontFamily: "Georgia, 'Times New Roman', Times, serif",
          fontSize: "20px",
          width: "80%",
          height: "50px",
        }}type="text" name="name" placeholder="    First name"/>
        <input style={{
          fontFamily: "Georgia, 'Times New Roman', Times, serif",
          fontSize: "20px",
          width: "80%",
          height: "50px",
          marginTop: "30px"
        }}type="text" name="name" placeholder="    Last name"/>
        <input style={{
          fontFamily: "Georgia, 'Times New Roman', Times, serif",
          fontSize: "20px",
          width: "80%",
          height: "50px",
          marginTop: "30px"
        }}type="text" name="name" placeholder="    Phone number"/>
        
        <div class="row">
        <div style={{backgroundColor: "red"}} class="column">
        <input style={{
          fontFamily: "Georgia, 'Times New Roman', Times, serif",
          fontSize: "20px",
          width: "100%",
          height: "50px",
          marginTop: "30px"
        }}type="text" name="name" placeholder="    Phone number"/>
        </div>
        <div style={{backgroundColor: "green"}} class="column">
        <input style={{
          fontFamily: "Georgia, 'Times New Roman', Times, serif",
          fontSize: "20px",
          width: "100%",
          height: "50px",
          marginTop: "30px"
        }}type="text" name="name" placeholder="    Phone number"/>
        </div>

      </div>  

      </div>
    </div>
  );
}

export default Register;
