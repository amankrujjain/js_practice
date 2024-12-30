const express = require('express');

const app = express();

app.post('/data',(req,res)=>{
    const api =  req.body;
    res.status(200).send(api)
})

app.listen(8000,()=>{
    console.log('The server is running');
})