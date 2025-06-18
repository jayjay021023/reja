const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://Aziza:5Q5XWJsqxq1zVykX@cluster0.euvpn5o.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("ERROR on connection MongoDB");
    } else {
      console.log("MongoDB connection succeed");

      db = client.db("Reja");
      module.exports = { db: () => db }; // ✅ db() funktsiya shaklida eksport

      const app = require("./app"); // app.js fayl
      const server = http.createServer(app);
      const PORT = 3012;

      server.listen(PORT, function () {
        console.log(` Server is running on http://localhost:${PORT}`);
      });
    }
  }
);