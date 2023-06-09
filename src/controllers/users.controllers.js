const UserServices = require('../services/user.services');

const createUser = async (req, res, next) => {
  try {
    console.log('entrando al controlador')
    const user = req.body;
     console.log('Iniciando el envio al servicio');
    await UserServices.createNewUser(user);
     console.log('Info devuelta por el servicio');
    res.status(201).send()
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
}

module.exports = {
  createUser
}