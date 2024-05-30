const express = require('express')

const app = express()

const { engine } = require('express-handlebars')

const routes = require('./routes')

const port = process.env.PORT || 3000

app.engine('hbs', engine({ extname: '.hbs' }))

app.set('view engine', 'hbs')

app.use(routes)

app.listen(port, () => console.info(`http://localhost:${port}`))

module.exports = app
