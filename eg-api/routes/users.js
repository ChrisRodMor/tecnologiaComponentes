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

/*  POST create user */
router.post('/', function(req, res, next) {

  //crear un nuevo usuario con los valores enviados por el body en la peticion
  var newUser = req.body;

  /* Si no se envian los campos requeridos (nombre y correo), retornamos error 400 Bad Request*/
  if (!newUser.hasOwnProperty('name') || !newUser.hasOwnProperty('email')){
    return res.status(400).send({error: 'Missing properties'}).end();
  }

  users.push(newUser);
  res.json(newUser);
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

/* DELETE users listing. */
router.delete('/:id', function(req, res, next) {
  var id = parseInt(req.params.id);

  //buscamos el usuario por su ID en la BD
  let userPosition = users.findIndex((item)=>{
    return item.id=== parseInt(req.params.id)
  });

  //Si no lo encuentra
  if(userPosition < 0){
    return res.status(400).
    send({ error : 'User not found'})
  }else{
    
    //PARA BORRARLO
    users.splice(userPosition,1);

    //devolvemos la actualización
    res.json(users)
  }
});

module.exports = router;
