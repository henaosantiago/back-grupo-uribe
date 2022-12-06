import express from 'express'
import { crearProducto , MostrarProductos ,MostrarProducto } from '../controllers/CrotollerProducto.js';

const productoRouter =express.Router();
 productoRouter.post('/',crearProducto)

 productoRouter.get('/',MostrarProductos)
 productoRouter.get('/:id',MostrarProducto)

 export default productoRouter