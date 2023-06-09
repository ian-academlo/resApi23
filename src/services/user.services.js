const {createUser} = require('../repositories/user.repository');

// manejo de exepciones 

class UserServices {
  static async createNewUser(newUser) {
    try {
      console.log('Iniciando el servicio');
       console.log('Consultando el repositorio');
      const user = await createUser(newUser);
       console.log('Informacion recibida del repo');
      return user;
    } catch (error) {
      throw error;
      // aqui no gestionamos el error
      // es lanzar el error esperando a que alguien mas lo atrape 
      // no esta para saberlo, ni yo para decirlo 
    }
  }
}

module.exports = UserServices;
// este servicio lo vamos a usar en nuestro controlador 