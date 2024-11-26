import Header from './components/Header.js';
import Button from './components/Button.js';
import './App.css';
import './QueryPage.css';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QueryPage() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/"); // Navigate to the Home page
  };

  // Fetch data from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/data') // Adjust to match your backend URL
      .then(response => {
        console.log(response.data); // Log the result here
        setData(response.data); // Assuming response.data is an object with table names as keys
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div>
        <h1 className="dbTitle">Database Tables</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          Object.keys(data).length === 0 ? (
            <p>No data available.</p>
          ) : (
            Object.keys(data).map((tableName, index) => (
              <div key={index} className="table-section">
                <h2>{tableName}</h2>
                <table className="data-table">
                  <thead>
                    <tr>
                      {/* Use actual column names here */}
                      {data[tableName]?.columns?.map((col, colIndex) => (
                        <th key={colIndex}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data[tableName]?.data?.length === 0 ? (
                      <tr>
                        <td colSpan={data[tableName]?.columns?.length || 1}>No records found.</td>
                      </tr>
                    ) : (
                      data[tableName]?.data?.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                          ))}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            ))
          )
        )}
      </div>
      <Button
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '30px',
        }}
        text="Home Page"
        onClick={handleClick}
      />
    </div>
  );
}

export default QueryPage;