

import express from 'express'
import 'dotenv/config'

const port = process.env.PORT;

const app = express();




app.get('/',(req,res)=>{
    res.status(200).send('Hello World!!')
})

app.get('/twitter' , (req,res)=>{
    res.status(200).send('Ambivert_1')
})

app.get('/login',(req,res)=>{
    res.status(200).send('<h1> Please Login at Chai aur Code </h1>')
})

app.get('/youtube',(req,res)=>{
    res.status(200).send('<h2> chai aur Code </h2>')
})

app.listen(port,()=>{
    console.log(`Server running on port : ${port}`);
})

