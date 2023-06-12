const express = require("express");
const app = express();

// print out greeting information and current time
app.get("/", (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.send(
    `<h1>Hello World with some little changes! Current time is: ${currentTime}</h1>`
  );
  // res.send("<h1>Hello World with some little changes!</h1>");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
