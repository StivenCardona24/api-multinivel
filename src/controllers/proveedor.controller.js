import db from "../database/db"


const getProveedor = async (req, res) => {
    const connection = await db.connectToDatabase();
    const sql = 'SELECT * FROM PROVEEDOR';
    const results = await connection.execute(sql);
    res.status(200).json(results.rows)
    await connection.close();
    console.log('Conexión cerrada');
}
  

    const addProveedor = async (req, res) =>{
        const connection = await getConnection();
        const {ID, NOMBRE, CORREO} = req.body;
        const sql = "INSERT INTO PROVEEDOR SET ?";
        const Proveedor = {
            ID, NOMBRE, CORREO
        }
        await connection.query(sql,Proveedor, (error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Proveedor creada"})
            }
        });
        
    };
    
    const getOneProveedor= async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const sql = `SELECT * FROM PROVEEDOR WHERE id = ${id}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            };
            if(result.length > 0){
                res.status(200).json(result);
            }
            else{
                res.send(`No hay una Proveedor  con el id ${id}`)
            }
        });
        
    };
    

    const updateProveedor = async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const {nombre, CORREO } = req.body;
    
        const Proveedor = {
            nombre,CORREO
        }
       
        const sql = "UPDATE PROVEEDOR SET ? WHERE id = ?"
    
        await connection.query(sql, [Proveedor, id] ,(error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Proveedor Actualizada"})
            }
        });
        
    };
    
    
    const deleteProveedor = async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const sql = `DELETE FROM PROVEEDOR WHERE id = ${id}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.send(`Proveedor  con ${id} eliminada`)
            }
        });
        
    };

     
    module.exports = {
        getProveedor,
        addProveedor,
        getOneProveedor,
        updateProveedor,
        deleteProveedor    


    
    }
