var express = require('express');
var router = express.Router();

//simulacion de base de datos de usuarios
var users = [
  {
    id: 1,
    name: 'John Doe',
    email: '<EMAIL>'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: '<EMAIL>'
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

/* PATCH users listing. */
router.patch('/:id', function (req,res){
  var user = req.body;
  if(!user || !user.name){
    return res.status(400).send({error:'Missing parameter'})
      }
      //buscamos el usuario por su ID en la BD
      let index= users.findIndex((item)=>{
        return item.id=== parseInt(req.params.id)
      })

      if(index < 0){
        return res.status(400).
        send({ error : 'User not found'})
      }else{
        
        //actualizamos los campos del usuario que encontramos
        Object.assign(users[index],user);

        //devolvemos la actualización
        res.send(users[index])
      }
});

/* PATCH users listing. */

/* DELETE users listing. */


module.exports = router;
