import Header from './components/Header.js';
import Button from './components/Button.js';
import { useNavigate } from "react-router-dom";
import './App.css';


function Home() {


  const navigate = useNavigate();
  const handleClick = () => {
  navigate("/query"); // Navigate to the About page
  };


  return (
    <div className="App">
    <Header></Header>
    <div className="banner">
      <h2>Hello, there. Welcome to <strong>Vitus.</strong></h2>
      <Button text='Register Today!'></Button>
    </div>
    <Button style={{
        position: 'absolute',
        bottom: '30px',
        left: '30px',}} 
        text='Query Page'
        onClick={handleClick}>
    </Button>
  </div>
  );
}

export default Home;
