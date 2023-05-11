import  config  from "../config"

const oracledb = require('oracledb');


const dbConfig = {
  user: config.user,
  password: config.password,
  connectString: 'XE' // Cambia el nombre de la base de datos según corresponda
};

async function connectToDatabase() {
  try {
    // Establecer la conexión
    const connection = await oracledb.getConnection(dbConfig);

    console.log('Conexión exitosa a la base de datos Oracle');

    return connection;
    // Realizar operaciones en la base de datos...

    // Cerrar la conexión al finalizar
    // await connection.close();
    // console.log('Conexión cerrada');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

// Llamar a la función para conectar a la base de datos

module.exports = {
  connectToDatabase
};