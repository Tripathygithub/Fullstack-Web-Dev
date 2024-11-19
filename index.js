const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.get('/custom-commit', (req, res) => {
  let type = req.query.type;
  let message = req.query.message;
  let result = type + ': ' + message;
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
