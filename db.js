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


//  const query = `
//  INSERT INTO ideas(

//     image,
//     title,
//     category,
//     description,
//     link
//  ) VALUES (?,?,?,?,?);
//  `

// const values = [
//     "https:// teste",
//     "Teste2",
//     "Estudo",
//     "Lorem ipson",
//     "link"
// ]

// db.run(query,values,(err)=>{
//     if(err) return console.log(err)
//     console.log(this)
// })

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