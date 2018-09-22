const express = require('express')
const fs = require('fs')
const path  = require('path')
const hbs = require('hbs')
hbs.handlebars = require('handlebars')

const app = express()
const port = process.env.PORT || 3000

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCurrentYear',() => new Date().getFullYear())
hbs.registerHelper('toUpper', (text) => {return text.toUpperCase()} )

app.set('views', path.resolve(__dirname, 'views'));
app.set('views engine','hbs')

app.use((req,res,next) => {
  const now = new Date().toString()
  const log = `${now}: ${req.method} ${req.url}`
  fs.appendFile('server.log', log + '\n', (error) => {
    if(error){
      console.log('Unable append file to server.log')
    }
  })
  next()
})

// app.use((req,res,next) => {
//   res.render('main.hbs')
// })
app.use(express.static(path.join('node/web-server/public')))

app.get('/', (req,res) => {
  res.render('home.hbs',{
    title: 'Home Page',
    message: 'Welcome to Home Page',
  })
})
app.get('/about', (req,res) => {
  res.render('about.hbs',{
    title:'About Page',
  })
})

app.get('/react', (req, res) => {
  res.render('react.hbs',{
    title: 'Indecision'
  })
})
app.get('/bad', (req, res) => {
  res.send({
    error:'This is wrong'
  })
})



app.listen(port,() => {
  console.log(`Server listening on port ${port}`)
})
