import db from "../database/db"


const getInventario = async (req, res) => {
    const connection = await db.connectToDatabase();
    const sql = 'SELECT * FROM INVENTARIO';
    const results = await connection.execute(sql);
    res.status(200).json(results.rows)
    await connection.close();
    console.log('Conexión cerrada');
}
  

    const addInventario = async (req, res) =>{
        const connection = await getConnection();
        const {ID, NOMBRE} = req.body;
        const sql = "INSERT INTO INVENTARIO SET ?";
        const inventario = {
            ID, NOMBRE
        }
        await connection.query(sql,inventario, (error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Inventario creada"})
            }
        });
        
    };
    
    const getOneInventario = async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const sql = `SELECT * FROM INVENTARIO WHERE id = ${id}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            };
            if(result.length > 0){
                res.status(200).json(result);
            }
            else{
                res.send(`No hay una Inventario  con el id ${id}`)
            }
        });
        
    };
    

    const updateInventario = async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const {nombre } = req.body;
    
        const inventario = {
            nombre
        }
       
        const sql = "UPDATE INVENTARIO SET ? WHERE id = ?"
    
        await connection.query(sql, [inventario, id] ,(error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Inventario Actualizada"})
            }
        });
        
    };
    
    
    const deleteInventario = async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const sql = `DELETE FROM INVENTARIO WHERE id = ${id}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.send(`Inventario  con ${id} eliminada`)
            }
        });
        
    };

     
    module.exports = {
        getInventario,
        addInventario,
        getOneInventario,
        updateInventario,
        deleteInventario    


    
    }
