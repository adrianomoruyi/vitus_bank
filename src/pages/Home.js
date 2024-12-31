import Header from '../components/Header.js';
import Button from '../components/Button.js';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {

  const navigate = useNavigate();

  const handleClick = () => {
  navigate("/register");
  };

  const handleClick2 = () => {
  navigate("/dashboard/details", {state: {data}});
  };

  // Fetching the data from the backend
  const [data, setData] = useState({});
    useEffect(() => {
      axios.get('http://vitus-backend-production.up.railway.app/customers')
        .then(response => {
          setData(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);  

  return (
    <div className="Home">
      <Header></Header>
      <title>Vitus Bank - Sign in</title>
      <div className="banner">
        <h2>Hello, there. Welcome to <strong>Vitus.</strong></h2>
        <Button className="custom-button" text='Register Today!' onClick={handleClick}></Button>     
      </div>
      <div style={{height:"50px"}}></div>  
      <p>NOTE: Welcome to my mock banking application! As this is a mock bank, registration and login will not function for security reasons, but <strong> please click the 
        "Enter dashboard" button </strong> to enter, view, and play around with the project!
      </p>
      <h3>Sign into your Vitus account</h3>   
      <input className="long" type="text" name="name" placeholder="Email address"/>
      <input className="long" type="text" name="name" placeholder="Password"/>
      <Button className="custom-button" style={{marginTop: "10px", marginBottom: "0px", paddingLeft: "40px" , paddingRight: "40px"}}text='Enter dashboard' onClick={handleClick2}> </Button>     
    </div>
  );
}

export default Home;
