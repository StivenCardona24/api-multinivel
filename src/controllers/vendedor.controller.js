import db from "../database/db"


const getVendedor = async (req, res) => {
    const connection = await db.connectToDatabase();
    const sql = 'SELECT * FROM VENDEDOR';
    const results = await connection.execute(sql);
    res.status(200).json(results.rows)
    await connection.close();
    console.log('Conexión cerrada');
}
  

    const addVendedor = async (req, res) =>{
        const connection = await getConnection();
        const {ID_VENDEDOR, NOMBRE, APELLIDO, EMAIL, FECHAINGRESO,FECHASALIDA, VENDEDOR_ID_VENDEDOR, NIVEL_ID, INVENTARIO_ID, PASSWORD} = req.body;
        const sql = "INSERT INTO VENDEDOR SET ?";
        const vendedor = {
            ID_VENDEDOR, NOMBRE, APELLIDO, EMAIL, FECHAINGRESO,FECHASALIDA, VENDEDOR_ID_VENDEDOR, NIVEL_ID, INVENTARIO_ID, PASSWORD
        }
        await connection.query(sql,vendedor, (error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Vendedor creado"})
            }
        });
        
    };
    
    const getOneVendedor = async (req, res) =>{
        const connection = await getConnection();
        const { ID_VENDEDOR } = req.params;
        const sql = `SELECT * FROM VENDEDOR WHERE ID_VENDEDOR = ${ID_VENDEDOR}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            };
            if(result.length > 0){
                res.status(200).json(result);
            }
            else{
                res.send(`No hay una Vendedor  con el ID_VENDEDOR ${ID_VENDEDOR}`)
            }
        });
        
    };
    

    const updateVendedor = async (req, res) =>{
        const connection = await getConnection();
        const { ID_VENDEDOR } = req.params;
        const {nombre, APELLIDO ,EMAIL, FECHAINGRESO, FECHASALIDA, VENDEDOR_ID_VENDEDOR, NIVEL_ID, INVENTARIO_ID, PASSWORD } = req.body;
    
        const vendedor = {
            nombre, APELLIDO ,EMAIL, FECHAINGRESO, FECHASALIDA, VENDEDOR_ID_VENDEDOR, NIVEL_ID, INVENTARIO_ID,PASSWORD
        }
       
        const sql = "UPDATE VENDEDOR SET ? WHERE ID_VENDEDOR = ?"
    
        await connection.query(sql, [vendedor, ID_VENDEDOR] ,(error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Vendedor Actualizado"})
            }
        });
        
    };
    
    
    const deleteVendedor = async (req, res) =>{
        const connection = await getConnection();
        const { ID_VENDEDOR } = req.params;
        const sql = `DELETE FROM VENDEDOR WHERE ID_VENDEDOR = ${ID_VENDEDOR}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.send(`Vendedor  con ${ID_VENDEDOR} eliminado`)
            }
        });
        
    };

     
    module.exports = {
        getVendedor,
        addVendedor,
        getOneVendedor,
        updateVendedor,
        deleteVendedor


    
    }
