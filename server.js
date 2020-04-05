const express = require("express");
const nunjucks = require("nunjucks")
const server = express();

const db = require('./db')


// const ideas = [
//     {
//         img:"https://image.flaticon.com/icons/svg/2728/2728995.svg",
//         title:"Cursos de Programação",
//         category:"Estudo1",
//         description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, sit ipsum modi cupiditate impedit repellat.Necessitatibus dolores inventore provident delectus dignissimos exercitationem ullam nostrum quae animi numquam, aliquid cupiditate voluptate?",
//         url:"https://rocketseat.com.br"
//     },
//     {
//         img: "https://image.flaticon.com/icons/svg/2761/2761833.svg",
//         title: "Cursos de Programação",
//         category: "Estudo2",
//         description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, sit ipsum modi cupiditate impedit repellat.Necessitatibus dolores inventore provident delectus dignissimos exercitationem ullam nostrum quae animi numquam, aliquid cupiditate voluptate?",
//         url: "https://rocketseat.com.br"
//     },
//     {
//         img: "https://image.flaticon.com/icons/svg/1721/1721095.svg",
//         title: "Cursos de Programação",
//         category: "Estudo3",
//         description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, sit ipsum modi cupiditate impedit repellat.Necessitatibus dolores inventore provident delectus dignissimos exercitationem ullam nostrum quae animi numquam, aliquid cupiditate voluptate?",
//         url: "https://rocketseat.com.br"
//     },
//     {
//         img: "https://image.flaticon.com/icons/svg/2563/2563094.svg",
//         title: "Cursos de Programação",
//         category: "Estudo4",
//         description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, sit ipsum modi cupiditate impedit repellat.Necessitatibus dolores inventore provident delectus dignissimos exercitationem ullam nostrum quae animi numquam, aliquid cupiditate voluptate?",
//         url: "https://rocketseat.com.br"
//     },
//     {
//         img: "https://image.flaticon.com/icons/svg/1721/1721095.svg",
//         title: "Cursos de Programação",
//         category: "Estudo3",
//         description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, sit ipsum modi cupiditate impedit repellat.Necessitatibus dolores inventore provident delectus dignissimos exercitationem ullam nostrum quae animi numquam, aliquid cupiditate voluptate?",
//         url: "https://rocketseat.com.br"
//     },
//     {
//         img: "https://image.flaticon.com/icons/svg/2563/2563094.svg",
//         title: "Cursos de Programação",
//         category: "Estudo4",
//         description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, sit ipsum modi cupiditate impedit repellat.Necessitatibus dolores inventore provident delectus dignissimos exercitationem ullam nostrum quae animi numquam, aliquid cupiditate voluptate?",
//         url: "https://rocketseat.com.br"
//     },
// ]

//configurar arquivos estaticos ( css, js, images)
server.use(express.static("public"))




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
    db.all(`SELECT *FROM ideas`, (err, rows)=>{
        if(err) return console.log(err)


        const reverseIdeas = [
            ...rows
        ].reverse()


        return res.render("ideias.html", { ideas: reverseIdeas })
       
    })


})


//servidor
server.listen(3000, ()=>{
    console.log('server is running')
})

