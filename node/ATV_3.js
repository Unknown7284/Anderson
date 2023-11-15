const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

app.get('/users/add', (req, res) => {
    res.render('userform')
    })
    
    app.post('/users/save', (req, res) => {
    const name = req.body.name
    const date = req.body.date
    const email = req.body.email
    const user = { name: name, email: email, date: date }
    res.render('viewuser', { user: user })
    
    })

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log('Server online')
  })