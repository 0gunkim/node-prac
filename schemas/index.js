const mongoose = require("mongose");

const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017/hello_prac")
    .catch((err) => console.log(err));
};

mongoose.connection.on("error", (err) => {
  console.error("connect fail", err);
});

module.exports = connect;
