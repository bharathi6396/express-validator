const express = require('express')
const exphbs = require('express-handlebars')
const routes = require ('./router');
const app = express()
app.use(express.json());
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.listen(8000)
