console.log("web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

//1 kirish kodlari
//expressga kirib kelayotgan malumotlarga bogliq bolgan codlar yoziladi
app.use(express.static("public"));
app.use(express.json()); // kirib kelayotgan json formatdagi datani object holatiga o'girib beradi
app.use(express.urlencoded({extended: true})); 


//2 session code

//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 routing code
app.get("/hello", function(req, res) {
    res.end(`<h1 style="background: red">HELLO  WORLD by aziza</h1>`);
});

app.get("/gift", function(req, res) {
    res.end(`<h1">siz sovg'alar bo'limidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`THe server is running successfully on port: ${PORT}`);
})
