const fs = require('fs').promises;
const express = require('express');
const app = express();
const middlewares = require('./middleware')
// const users = require('./users');
// const router = express.Router();

const users = [
  {
    id: 2,
    user: 'marcos',
    isActive:true
  },
  {
    id: 3,
    user: 'paulo',
    isActive:true

  },
   {
    id: 3,
    user: 'roger',
    isActive:false
  }
]

const pathname = '/user/:id';

/* app.post(pathname, (req, res) => {
  const id = req.params.id;
}); */

app.use(express.json());

app.post(pathname, middlewares.checkboolean, middlewares.checkid)

const readUsers = async() => {
  const file = await fs.readFile('users.js', 'utf-8')
  return file.json();
};

app.listen(3000, () => console.log('ouvindo na porta 3000!'))
