CREATE TABLE withdrawal (
    AccountID INTEGER,
    TransactionID INTEGER PRIMARY KEY,
    Amount INTEGER,
    TransactionDate DATE
);

CREATE TABLE deposit (
    AccountID INTEGER,
    TransactionID INTEGER PRIMARY KEY,
    Amount INTEGER,
    TransactionDate DATE
);

CREATE TABLE loan (
    AccountID INTEGER,
    TransactionID INTEGER PRIMARY KEY,
    Amount INTEGER,
    InterestRate DECIMAL(5,2), 
    PaymentDue DECIMAL(10,2), 
    BankID INTEGER,
    TransactionDate DATE,
    PaymentDate DATE
);

CREATE TABLE bank (
    BankID INTEGER PRIMARY KEY,
    Name VARCHAR2(20)
);

CREATE TABLE branch (
    BranchID INTEGER PRIMARY KEY,
    Address VARCHAR2(30)
);

CREATE TABLE user_ (
    UserID INTEGER PRIMARY KEY,
    firstName VARCHAR2(20),
    lastName VARCHAR2(20),
    email VARCHAR2(50), 
    phoneNum VARCHAR2(15), 
    pass VARCHAR2(20)
);

CREATE TABLE account_ (
    UserID INTEGER REFERENCES user_(UserID),
    AccountID INTEGER PRIMARY KEY,
    accountType VARCHAR2(10), 
    balance DECIMAL(10,2),
    currency VARCHAR2(3),
    status VARCHAR2(3)
);


-- Insert data into bank table
INSERT INTO bank (BankID, Name) VALUES (1, 'Vitus Bank');
INSERT INTO bank (BankID, Name) VALUES (2, 'Global Bank');

-- Insert data into branch table
INSERT INTO branch (BranchID, Address) VALUES (1, '123 Main St, City A');
INSERT INTO branch (BranchID, Address) VALUES (2, '456 Elm St, City B');

-- Insert data into user table
INSERT INTO user_ (UserID, firstName, lastName, email, phoneNum, pass) VALUES (1, 'John', 'Doe', 'john.doe@example.com', '123-456-7890', 'password123');
INSERT INTO user_ (UserID, firstName, lastName, email, phoneNum, pass) VALUES (2, 'Jane', 'Smith', 'jane.smith@example.com', '987-654-3210', 'password456');

-- Insert data into account table
INSERT INTO account_ (UserID, AccountID, accountType, balance, currency, status) VALUES (1, 104, 'Checking', 5000.00, 'USD', 'ACT');
INSERT INTO account_ (UserID, AccountID, accountType, balance, currency, status) VALUES (2, 105, 'Savings', 10000.00, 'USD', 'ACT');
INSERT INTO account_ (UserID, AccountID, accountType, balance, currency, status) VALUES (1, 106, 'Savings', 15000.00, 'USD', 'ACT');

