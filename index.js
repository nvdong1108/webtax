const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mainRouter = require('./routers/fe-main');
//app config
const app = express();
//Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//handlebars
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: 'hbs',
    layoutsDir: './views/layouts',
    partialsDir: './views/partials'
}));
app.set('view engine', 'hbs');
//static resources
app.use('/static', express.static('./resources'));
//endpoint
app.use('/', mainRouter)

app.listen( 3000,()=> {console.log('start')})