const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./WorkshopDev.db')

db.serialize(()=>{

    // criar a tabela
    db.run(`  
    CREATE TABLE IF NOT EXISTS  ideas(
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         image TEXT,
         title TEXT,
         category TEXT,
         description TEXT,
         link TEXT


    );
    
    
    `)

  {// inserir dados na tavela
       /*  const query = `
    INSERT INTO ideas(
          image,
          title,
          category,
          description,
          link

       ) VALUES (?,?,?,?,?);`

        const values = [

            "https://image.flaticon.com/icons/svg/2728/2728995.svg",
            "Cursos de Programação",
            "Estudo1",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, sit ipsum modi cupiditate impedit repellat.Necessitatibus dolores inventore provident delectus dignissimos exercitationem ullam nostrum quae animi numquam, aliquid cupiditate voluptate?",
            "https://rocketseat.com.br"

        ]

        db.run(query, values, function (err) {
            if (err) return console.log(err)

            console.log(this)
        })/* Inserir dados na tabela */ 
  } 
   



  //Deletar um dado da tabela // desafio

//    db.run('DELETE  FROM ideas WHERE id = ?', [1], (err)=>{
//        if(err) return console.log(err)

//        console.log("Deletei", this)
//    })
    
    
    // //consultar dados na tabela
    // db.all(`SELECT *FROM ideas`, (err, rows)=>{
    //     if(err) return console.log(err)

    //     console.log(rows)
    // })




    


})

module.exports = db 