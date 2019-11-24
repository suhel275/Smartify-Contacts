// [server.js] file is an entry point to our backend

const express = require('express'); // to import anything in the file in [ES6] we have to use [import] keyword but here we are
// not using any [import] keyword , here we are using [common.js]

const app = express();

// app.get('/', (req, res) => res.send('Hello World'));// it was for testing purpose

app.get(
  '/',
  (req, res) => res.json({ msg: 'Welcome to ContactKeeper API ...' }) // in actual we will respond a json because we are creating an [API]
);

// Define Routes // that means when we will get these URL from browser then we will go inside these files
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // when server is on then we give request from browser
// to hit the ENDPOINT .
