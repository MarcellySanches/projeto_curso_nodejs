const{Pool}= require('pg')

const Client= new Pool({
    connectionString:process.env.DATABASE_URL || 'postgres://muihquldngaicu:0ee969d7d1da9444f0fab2335d41f4d6de4936ece0b11e741de3144d9f69ef0a@ec2-34-193-235-32.compute-1.amazonaws.com:5432/da8u2fhvirenud',
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