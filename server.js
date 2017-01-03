'use strict';

const express = require('express');
const debug = require('debug')('fomogram:server');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGODB_LOCAL_URI;
const PORT = process.env.PORT;
const app = express();

dotenv.load();

// mongoose.connect(MONGODB_URI);

app.use(cors());
app.use(morgan('dev'));

app.listen(PORT, () => {
  debug(`server up: ${PORT}`);
});
