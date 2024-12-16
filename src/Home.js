import logo from './logo.svg';
import Header from './components/Header.js';
import Button from './components/Button.js';
import { useNavigate } from "react-router-dom";
import './Home.css';



function Home() {

  const navigate = useNavigate();

  const handleClick = () => {
  navigate("/register"); // Navigate to the Register page
  };

  return (
    <div className="Home">
      <Header></Header>
      <div className="banner">
        <h2>Hello, there. Welcome to <strong>Vitus.</strong></h2>
        <Button text='Register Today!' onClick={handleClick}></Button>
      </div>
      <Button style={{
          position: 'absolute',
          bottom: '30px',
          left: '30px',}} text='Query Page'></Button>
    </div>
  );
}

export default Home;
