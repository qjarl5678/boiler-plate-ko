const express = require('express');

import express from 'express';
const app = express();
const port = 5000;

const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://devbamki:1234@cluster0.ivn7u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req,res) =>{ res.send('Hello, World!!')});

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`))
