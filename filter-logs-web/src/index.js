require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { logger } = require('./utils');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// app.use(routes)
app.use(helmet());
app.use(cors());


app.get('/test', (req, res) => res.status(200).send({ status: 'ok' }));

app.listen(port, () => {
  logger.info(`Server Listening on ${port}`);
});
