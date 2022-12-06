/* Importacion de dependencia y archivos */
import express from 'express';
import dataBase from './database/conexionDatabase.js';

/* Instancia de Expres y apertura de puerto */
const app = express();
const port = 3100;

/* Validacion de coneccion a la base de datos */
try {
  await dataBase.authenticate()
  console.log(`Coneccion exitosa a la base de datos`)
} catch (error) {
  console.log(`CONECCION no exitosa: ${error}`)
}

/* Ejecucion de servidor */
app.listen(port, ()=> {
  console.log(`Servidor corriendo en el puerto ${port}`)
  console.log(`Servidor funcionando en http://localhost:3100`)
});