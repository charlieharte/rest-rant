//require needed modules
const { application } = require('express')
const express = require('express')
require('dotenv').config()
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

app.use('/places', require('./controllers/places'))

app.get('/', (req,res) => {
  res.render('home')
})

app.get('/second', (req,res) => {
  res.send('My Second Page!')
})

app.get('*', (req,res) => {
  res.status(404).render('error404')
})

// const PORT = process.env.PORT || 3000

app.listen(process.env.PORT)
// app.listen(PORT, console.log(`listening on port ${PORT}`))