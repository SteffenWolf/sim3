require('dotenv').config()
const express = require('express'), 
      sessions= require('express-session'), 
      massive = require('massive'),
      ctrl = require('./controllers/controller');

const app = express(), { SERVER_PORT, MASSIVE_CONNECTION, SESSION_SECRET} = process.env

app.use(express.json())

app.use(sessions({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 3
  }
}))

massive(MASSIVE_CONNECTION).then(db => {
  app.set('db', db);
  app.listen( SERVER_PORT, () => console.log(`"Hullo from"`, SERVER_PORT))
})

//ENDPOINTS
app.post('/api/auth/register', ctrl.register);
app.post('/api/auth/login', ctrl.login);
app.get('/api/posts', ctrl.allPosts)
app.post('/auth/logout', ctrl.logout)

app.get('/api/current', ctrl.getUser)
