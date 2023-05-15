import db from "../database/db"
const fs = require('fs');


const crearTablespace= async(req,res)=> {
  
    const connection = await db.connectToDatabase();
   const { nombre, rutaTablespace, tamaño } = req.params;
   
    await connection.execute(`
      CREATE TABLESPACE ${nombre}
      DATAFILE '${rutaTablespace}'
      SIZE ${tamaño}
      AUTOEXTEND ON
      NEXT ${tamaño}';
    `);

    const tablespace = {
      nombre, rutaTablespace, tamaño
  }
  await connection.query(sql,tablespace, (error, results)=>{
      if(error){
          res.status(500);
          res.send(error);
      }
      else{
          res.status(200).json({message: "tablespace creada"})
      }
  });
  
};




const asignarTablespaceATabla= async(req,res)=> {
  const { nombreTabla, nombreTablespace } = req.params; 

  try {
    const connection = await db.connectToDatabase();   
    await connection.execute(`
      ALTER TABLE ${nombreTabla} 
      STORAGE (TABLESPACE ${nombreTablespace})
    `);

    console.log(`Tablespace ${nombreTablespace} asignado correctamente a la tabla ${nombreTabla}`);
  } catch (error) {
    console.error('Error al asignar tablespace a tabla:', error);
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}


  
const crearCarpeta= async(req,res)=> {
  const { nombreCarpeta, nombreTablespace,tamaño } = req.params; 
  const rutaCarpeta = `./${nombreCarpeta}`;
  const rutaTablespace = `${rutaCarpeta}/${nombreTablespace}.dbf`;

  try {
    if (fs.existsSync(rutaCarpeta)) {
      console.log('La carpeta ya existe, agregando tablespace...');
      await crearTablespace(nombreTablespace, rutaTablespace, tamaño);
    } else {
      fs.mkdirSync(rutaCarpeta);
      console.log('Carpeta creada correctamente');
      await crearTablespace(nombreTablespace, rutaTablespace, tamaño);
    }
  } catch (error) {
    console.error('Error al crear la carpeta:', error);
  }
}

module.exports = {
  crearCarpeta,
  asignarTablespaceATabla
}


     
