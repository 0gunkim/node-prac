const express = require("express");
const app = express();
const port = 3000;
const helloRouter = require("./routes/hello.js");

app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("good data");
});

app.get("/", (req, res) => {
  console.log(req.query);
  const obj = {
    id: "1",
    name: "ug",
  };
  res.status(400).json(obj);
});
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/api", [helloRouter]);
app.get("/:id", (req, res) => {
  console.log(req.params);
  res.send("good id");
});
app.listen(port, () => {
  console.log(port, "Open Server");
});
