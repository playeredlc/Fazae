require('dotenv').config()

const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const estimateRoute = require('./routes/estimate.routes');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.use(estimateRoute);

module.exports = app;
