const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://Aziza:5Q5XWJsqxq1zVykX@cluster0.euvpn5o.mongodb.net/";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connction MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = db;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is runnning successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);