const express = require ('express');
const conectarDB = require('./config/db');
const { use } = require('./routes/producto');

const app = express();

conectarDB();

app.use('/api/productos',require('./routes/producto'))

// app.get('/',(req,res)=>{
//   res.sed('hola mundo')
// })

app.listen(4000,()=>{
  console.log("El servidor esta arriba")
})