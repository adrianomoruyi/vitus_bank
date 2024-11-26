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

// List of your original tables
const originalTables = ['DEPOSIT', 'WITHDRAWAL', 'LOAN', 'BANK', 'BRANCH', 'USER_', 'ACCOUNT_'];

// Route to fetch data from specified tables
app.get('/api/data', async (req, res) => {
  try {
    console.log("Connecting to the database...");
    const connection = await oracledb.getConnection(dbConfig);
    console.log("Connected");

    let allData = {};

    // For each table in the list, query its column names and data
    for (let tableName of originalTables) {
      const columnQuery = `SELECT COLUMN_NAME FROM USER_TAB_COLUMNS WHERE TABLE_NAME = :tableName`;
      const dataQuery = `SELECT * FROM ${tableName}`;
      
      try {
        // Get column names for the current table
        const columnsResult = await connection.execute(columnQuery, [tableName]);
        const columnNames = columnsResult.rows.map(row => row[0]);

        // Get the data for the current table
        const dataResult = await connection.execute(dataQuery);
        const tableData = dataResult.rows;

        // Store column names and data for each table
        allData[tableName] = {
          columns: columnNames,
          data: tableData
        };
      } catch (err) {
        console.error(`Error querying table ${tableName}:`, err.message);
        allData[tableName] = { columns: [], data: `Error: ${err.message}` };
      }
    }

    await connection.close();
    res.json(allData); // Send both columns and data as a JSON response

  } catch (err) {
    console.error(err);
    res.status(500).send('Error querying database');
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});