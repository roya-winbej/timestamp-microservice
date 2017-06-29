const express = require('express');
const app = express();


app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3030, () => {
    console.log('Server running on port 3030');
});