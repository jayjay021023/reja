console.log("web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) =>{
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
});

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
app.post("/create-item", (req, res) => {
    //TODO: code with db here
})

app.get('/author', (req, res) => {
    res.render("author",{user: user});
});
app.get("/", function (req , res) {
    res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
})
