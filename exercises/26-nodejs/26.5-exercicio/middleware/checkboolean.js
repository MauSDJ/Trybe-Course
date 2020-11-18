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


/* function findUser(userID, status) {
  const index = users.findIndex(({ id }) => id === userID);
  const userStatus = users[index].isActive;
  userStatus = status;
  
  return userStatus;
  }  */

module.exports = (req, res, next) => {
  users.find(resposta => resposta.id === parseInt(req.params.id));
  console.log(req.body.status)
  if(typeof req.body.status === 'boolean') next();
  res.status(400).send({ "message": "status isn't a boolean" });
};
