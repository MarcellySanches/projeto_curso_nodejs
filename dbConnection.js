const{Pool}= require('pg')

const Client= new Pool({
    connectionString:process.env.DATABASE_URL || // connectionString:'inserir sua string,
    ssl:{
    rejectUnauthorized:false
    }
})

//teste de conexão
// async function connectTeste(){
//     const res= await Client.query('SELECT $1:: text as message',['Olá mundo'],(err,result) =>{
//         console.log(result.rows[0].message)
//     })
// }
// connectTeste()

module.exports = Client