const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const routes = require('./routes')

dotenv.config();

const app = express();

app.use(cors());

app.use(routes);
app.listen(3333);