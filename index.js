//require needed modules
const express = require('express')
require('dotenv').config()
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req,res) => {
  res.send('Hello World')
})

app.get('/second', (req,res) => {
  res.send('My Second Page!')
})

app.get('*', (req,res) => {
  res.status(404).send('<h1>404 Page</h1>')
})

// const PORT = process.env.PORT || 3000

app.listen(process.env.PORT)
// app.listen(PORT, console.log(`listening on port ${PORT}`))