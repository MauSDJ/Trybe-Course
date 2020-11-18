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


function findUser(userID, status) {
  const index = users.findIndex(({ id }) => id === userID);
  const userStatus = users[index].isActive;
  userStatus = status;
  
  return userStatus;
}

module.exports = (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;
  const acharUsuario = findUser(id, status) 
  console.log(acharUsuario)
};
