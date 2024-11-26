const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Oracle DB configuration
const dbConfig = {
  user: 'ADMIN',        // your Oracle database username
  password: 'Ninjas96', // your Oracle database password
  connectString: 'localhost:1521/XE', // replace with your host, port, and SID
};

// Route to fetch data from the database
app.get('/api/data', async (req, res) => {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT * FROM your_table'); // Replace with your table name
    res.json(result.rows);
    await connection.close();
  } catch (err) {
    console.error(err);
    res.status(500).send('Error querying database');
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});