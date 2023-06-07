const express = require("express");
const app = express();
const port = 3000;
const helloRouter = require("./routes/hello.js");

app.use("/api", [helloRouter]);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(port, "Open Server");
});
