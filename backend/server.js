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

// Route to fetch data from multiple specific tables
app.get('/api/data', async (req, res) => {
  try {
    console.log("Connecting to the database...");
    const connection = await oracledb.getConnection(dbConfig);
    console.log("Connected");

    // Query the deposit table
    const depositQuery = `SELECT * FROM deposit`;
    const depositResult = await connection.execute(depositQuery);

    // Query the withdrawal table
    const withdrawalQuery = `SELECT * FROM withdrawal`;
    const withdrawalResult = await connection.execute(withdrawalQuery);

    // Query the loan table
    const loanQuery = `SELECT * FROM loan`;
    const loanResult = await connection.execute(loanQuery);

    // Query the bank table
    const bankQuery = `SELECT * FROM bank`;
    const bankResult = await connection.execute(bankQuery);

    // Query the branch table
    const branchQuery = `SELECT * FROM branch`;
    const branchResult = await connection.execute(branchQuery);

    // Query the user table
    const userQuery = `SELECT * FROM user`;
    const userResult = await connection.execute(userQuery);

    // Query the account table
    const accountQuery = `SELECT * FROM account`;
    const accountResult = await connection.execute(accountQuery);

    // Prepare the results in an object
    const allData = {
      deposit: depositResult.rows,
      withdrawal: withdrawalResult.rows,
      loan: loanResult.rows,
      bank: bankResult.rows,
      branch: branchResult.rows,
      user: userResult.rows,
      account: accountResult.rows,
    };

    // Close the connection
    await connection.close();

    // Send the result as JSON
    res.json(allData);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error querying database');
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});