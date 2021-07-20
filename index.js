const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');

app.use(cors())

const PORT=process.env.PORT || 3000;


app.use('/',cors());
app.use('/',express.static('game'))

console.log("Listening on port "+PORT);

http.listen(PORT, () => {
  console.log('listening on '+PORT);
});