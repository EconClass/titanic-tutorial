const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT = 8080;

app.listen(PORT, () => {
  console.log('Server is running at:', PORT);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
})