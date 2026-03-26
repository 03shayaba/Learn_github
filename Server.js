const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Welcome to my Github Learning Project!');
});

console.log("new changes in initial setup branch");
app.listen(PORT,   () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
