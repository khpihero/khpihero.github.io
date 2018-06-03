const express = require('express');
const app = express();

app.post('/heroes/add', (res, req) => {


});

app.listen(3001, () => {
  console.log(`Start server...`);
});
