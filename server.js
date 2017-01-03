'use strict';

const express = require('express');
const debug = require('debug')('fomogram:server');

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => {
  debug(`server up: ${PORT}`);
});
