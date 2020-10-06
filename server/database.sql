DROP DATABASE IF EXISTS Marketext;

CREATE DATABASE Marketext;

USE Marketext;

CREATE TABLE User(
    userId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    verified BOOLEAN DEFAULT 0,
    registrationDate DATETIME NOT NULL
);

CREATE TABLE Profile(
    profileId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    zipCode INT NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(userId)
);

CREATE TABLE Balance(
    balanceId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    amount INT NOT NULL,
    currencyType VARCHAR(255) NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(userId)
);


CREATE TABLE CurrentlyListed (
    listedId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    price VARCHAR(255) NOT NULL,
    `condition` VARCHAR(255) NOT NULL,
    userId INT NOT NULL,
    ISBN INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(userId)
);


CREATE TABLE Transaction (
    transactionId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    price INT NOT NULL,
    transactionDate DATETIME NOT NULL,
    quantity INT NOT NULL,
    paymentMethod VARCHAR(255) NOT NULL,
    listedId INT NOT NULL,
    FOREIGN KEY (listedId) REFERENCES CurrentlyListed(listedId)
);

