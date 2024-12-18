const express = require('express');
const mockData = require('./mockData.json');
const app = express();

const PORT = 5000;


// route 
app.get('/api/users' , (req , res)=>{
    res.json(mockData);
})

app.listen(PORT , function(){
    console.log(`Server is runnig at ${PORT}`)
})