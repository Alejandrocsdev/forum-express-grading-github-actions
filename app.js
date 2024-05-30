const express = require('express')

const app = express()

const { engine } = require('express-handlebars')

const flash = require('connect-flash')

const session = require('express-session')

const passport = require('./config/passport')

const handlebarsHelpers = require('./helpers/handlebars-helpers')

const { getUser } = require('./helpers/auth-helpers')

const routes = require('./routes')

const port = 3000

const secret = 'secret'

app.engine('hbs', engine({ extname: '.hbs', helpers: handlebarsHelpers }))

app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

app.use(session({ secret, resave: false, saveUninitialized: false }))

app.use(passport.initialize())

app.use(passport.session())

app.use(flash())

app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success_messages')
  res.locals.error_messages = req.flash('error_messages')
  res.locals.user = getUser(req)
  next()
})

app.use(routes)

app.listen(port, () => console.info(`http://localhost:${port}`))

module.exports = app
