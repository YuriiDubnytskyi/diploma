const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./routes/index')
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const cookieParser = require('cookie-parser')
const app = express();
const http = require('http')
const server = http.createServer(app)
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_DB_CONNECT,
{useNewUrlParser:true,useUnifiedTopology: true})
    .then(() => {console.log('Database is connected') },
err => { console.log('Can not connect to the database' +err)});

app.use(cors())
app.use(express.json());

app.use(cookieParser())

const passport = require('passport');
const expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

const initPassport = require('./passport/init');
initPassport(passport);



routes(app,passport)

app.use(express.static(path.join(__dirname, 'client/build')));
//app.use('/', express.static('./client/my-app/build'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});



server.listen(port, () => console.log(`Listening on port ${port}`))
// app.listen(5000 ,function () {
//   console.log('Example app listening on port 5000!');
// });