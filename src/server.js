const express = require('express');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = process.env.PORT || 3000;

// Use the cors middleware to handle CORS
app.use(cors());
