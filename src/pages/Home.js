import Header from '../components/Header.js';
import Button from '../components/Button.js';
import { useNavigate } from "react-router-dom";
import './Home.css';

function Home() {

  const navigate = useNavigate();

  const handleClick = () => {
  navigate("/register"); // Navigate to the Register page
  };

  const handleClick2 = () => {
    navigate("/dashboard"); // Navigate to the Register page
    };

  return (
    <div className="Home">
      <Header></Header>
      <title>Vitus Bank - Sign in</title>
      <div className="banner">
        <h2>Hello, there. Welcome to <strong>Vitus.</strong></h2>
        <Button className="custom-button" text='Register Today!' onClick={handleClick}></Button>     
      </div>
      <div style={{height:"50px"}}></div>  
      <h3>Sign into your Vitus account</h3>   
      <input className="long" type="text" name="name" placeholder="Email address"/>
      <input className="long" type="text" name="name" placeholder="Password"/>
      <Button className="custom-button" style={{marginTop: "10px", marginBottom: "0px", paddingLeft: "40px" , paddingRight: "40px"}}text='Sign in' onClick={handleClick2}> </Button>     
    </div>
  );
}

export default Home;
