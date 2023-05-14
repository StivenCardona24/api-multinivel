import express from "express";
import morgan from "morgan";


//Routes importacion
import categoriasRoute from "./routes/categorias.route"
import compraRoute from "./routes/compra.route"
import despachoRoute from "./routes/despacho.route"
import productoRoute from "./routes/producto.route"
import comisionRoute from "./routes/comision.route"
import proveedorRoute from "./routes/proveedor.route"
import vendedorRoute from "./routes/vendedor.route"
import ventaRoute from "./routes/venta.route"
import promocionRoute from "./routes/promocion.route"
import nivelRoute from "./routes/nivel.route"
import inventarioRoute from "./routes/inventario.route"
import sesionRoute from "./routes/sesion.route"


const app = express();



//settings
app.set("port", 4000);

//Middlewares
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.use(morgan("dev"));
app.use(express.json());


// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error del servidor');
  });


// Routes 
app.get("/", async (req, res) => {
      res.send('<h1>Hola desde land page!</h1>');
});

 app.use("/categorias", categoriasRoute);
 app.use("/compras", compraRoute);
 app.use("/despacho", despachoRoute);
 app.use("/productos", productoRoute);
 app.use("/comision", comisionRoute);
 app.use("/proveedor", proveedorRoute);
 app.use("/vendedor", proveedorRoute);
 app.use("/venta", proveedorRoute);
 app.use("/promocion", promocionRoute);
 app.use("/nivel", nivelRoute);
 app.use("/sesion", sesionRoute);

export default app;