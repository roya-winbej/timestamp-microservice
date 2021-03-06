const express = require('express');
const app = express();

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


const listener = app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${listener.address().port}`);
});