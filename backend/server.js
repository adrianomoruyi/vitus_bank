const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Oracle DB configuration
const dbConfig = {
  user: 'SYSTEM',        // your Oracle database username
  password: 'Ninjas96',  // your Oracle database password
  connectString: 'localhost:1521/XE', // replace with your host, port, and SID
};

// Route to fetch data from all tables
app.get('/api/data', async (req, res) => {
  try {
    console.log("Connecting to the database...");
    const connection = await oracledb.getConnection(dbConfig);
    console.log("Connected");

    // Get all table names from USER_TABLES
    const tablesResult = await connection.execute(
      `SELECT table_name FROM user_tables`
    );

    const tables = tablesResult.rows;
    let allData = {};

    // For each table, query its data and store it in an object
    for (let table of tables) {
      const tableName = table[0]; // Extract table name
      const query = `SELECT * FROM ${tableName}`;
      
      // Query the table's data
      const result = await connection.execute(query);
      allData[tableName] = result.rows;
    }

    await connection.close();
    res.json(allData); // Send all tables' data as a JSON response

  } catch (err) {
    console.error(err);
    res.status(500).send('Error querying database');
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});