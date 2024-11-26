import Header from './components/Header.js';
import Button from './components/Button.js';
import './App.css';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QueryPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const handleClick = () => {
  navigate("/"); // Navigate to the About page
  };
  
  // Fetch data from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/data') // Adjust to match your backend URL
      .then(response => {
        console.log(response.data);  // Log the result here
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  
  return (
    <div className="App">
    <Header></Header>
    <div>
      <h1>Data List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((row, index) => (
            <li key={index}>
              {/* Adjust this based on your data structure */}
              {row[0]} - {row[1]} {/* Example if row contains two columns */}
            </li>
          ))}
        </ul>
      )}
    </div>
    <Button style={{
        position: 'absolute',
        bottom: '30px',
        left: '30px',}} text='Home Page'
        onClick={handleClick}>
        </Button>
  </div>
  );
}

export default QueryPage;
