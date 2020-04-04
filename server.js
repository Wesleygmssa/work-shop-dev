const express = require("express");
const server = express();


//configurar arquivos estaticos ( css, js, images)
server.use(express.static("public"))


//rotas
server.get("/", (req , res)=>{
 return res.sendFile(__dirname + "/index.html")
})


//rotas
server.get("/ideias", (req, res) => {
    return res.sendFile(__dirname + "/ideias.html")
})


//servidor
server.listen(3000, ()=>{
    console.log('server is running')
})

