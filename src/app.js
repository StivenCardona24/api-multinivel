import express from "express";
import morgan from "morgan";


//Routes importacion
import categoriasRoute from "./routes/categorias.route"



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


export default app;