const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "15062002",
  database: "banco",
});

db.connect();

app.use(express.json());

app.post("/register", (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const password = req.body.password;
  
    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length == 0) {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          db.query(
            "INSERT INTO usuarios (nome, email, password) VALUE (?,?,?)",
            [nome ,email, hash],
            (error, response) => {
              if (err) {
                res.send(err);
              }
              res.send({ msg: "Usuário cadastrado com sucesso", admincode: 1});
            }
          );
        });
      } else {
        res.send({ msg: "Email já cadastrado", admincode: 0});
      }
    });
  });

  app.post("/logindb", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (error) {
            res.send(error);
          }
          if(email == "admin@gmail.com"){
            res.send({ msg: "admin logado!", admincode: 2});
          }
          if (response) {
            res.send({ msg: "Usuário logado!", admincode: 1});
          } else {
            res.send({ msg: "Senha incorreta!", admincode: 0});
          }
        });
      } else {
        res.send({ msg: "Usuário não registrado!", admincode: 0});
      }
    });
  });

/* app.get("/", (req, res) => {
    db.query("INSERT INTO usuarios (nome,email, password) VALUES ('victor','victor2@gmail.com', '1234567')", (err, result) => {
        if(err){
            console.log(err)
        }
    })
}); */

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});