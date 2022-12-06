
import Producto from '../models/ModelProducto.js'

const crearProducto =async(req,res)=>{
try {
    await Producto.create(req.body)
    res.json({
        message: "usuario creando correctamente",
    })
} catch (error) {
    res.json({
        message: "no se pudo registrar" + error
      });
    
}

}
async  function MostrarProductos(req,res) {
    try {
        const productos =await Producto.findAll()
        res.json(productos)
    } catch (error) {
        res.json({
            message:'base de datos vacia'
        })

    }
    


    
}
const MostrarProducto =async (req,res)=>{
try {
    const producto = await Producto.findOne({where:{id:req.params.id}})
    res.json(producto)
} catch (error) {
    res.json({
        message: 'producto no exite'+ error
    })
}

}

export {
    crearProducto,
    MostrarProductos,
    MostrarProducto
}
