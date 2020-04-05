const express = require("express");
const nunjucks = require("nunjucks")
const server = express();

const db = require('./db')



//configurar arquivos estaticos ( css, js, images)
server.use(express.static("public"))

//habilitar uso do req.body
server.use(express.urlencoded({extended:true}))


nunjucks.configure("views",{
    express:server,
    noCache: true,
})

//rotas
server.get("/", (req , res)=>{

   //consultar dados na tabela
    db.all(`SELECT *FROM ideas`, (err, rows)=>{
        if(err) return console.log(err)

        const reverseIdeas = [...rows].reverse()

        let lastIdeas = [] // nova coleção de ideias

        for (let idea of reverseIdeas) {
            if (lastIdeas.length < 2) {
                lastIdeas.push(idea)
            }
        }


        return res.render("index.html", { ideas: lastIdeas })
    })

})


//rotas
server.get("/ideias", (req, res) => {


    //consultar dados na tabela
    db.all(`SELECT * FROM ideas`, (err, rows)=>{
        if(err){
            console.log(err)
            return res.send("Erro no banco de dados!")
        } 


        const reverseIdeas = [
            ...rows
        ].reverse()


        return res.render("ideias.html", { ideas: reverseIdeas })
       
    })


})

//rota para inserir no banco de dados
server.post('/', (req, res)=>{

    // inserir dados na tavela
  const query = `
            INSERT INTO ideas(
            image,
            title,
            category,
            description,
            link

            ) VALUES (?,?,?,?,?);`

 const values = [

     req.body.image,
     req.body.title,
     req.body.category,
     req.body.description,
     req.body.link


 ]

 db.run(query, values, function (err) {
     if (err) {
         console.log(err)
         return res.send("Erro no banco de dados!")
     } 

     return res.redirect('/ideias')
 }) 

})

//servidor
server.listen(3000, ()=>{
    console.log('server is running')
})

