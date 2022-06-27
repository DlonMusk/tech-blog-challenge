const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');

const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// set up session parameters
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
        db: sequelize
    })
}

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded);

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});