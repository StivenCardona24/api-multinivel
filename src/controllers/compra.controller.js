import db from "../database/db"


const getCompra = async (req, res) => {
    const connection = await db.connectToDatabase();
    const sql = 'SELECT * FROM COMPRA';
    const results = await connection.execute(sql);
    res.status(200).json(results.rows)
    await connection.close();
    console.log('Conexión cerrada');
}
  

    const addCompra = async (req, res) =>{
        const connection = await getConnection();
        const {ID, CANTIDAD,TOTAL,PROVEEDOR_ID,FECHA} = req.body;
        const sql = "INSERT INTO COMPRA SET ?";
        const compra = {
            ID, CANTIDAD,TOTAL,PROVEEDOR_ID,FECHA
        }
        await connection.query(sql,compra, (error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "compra creada"})
            }
        });
        
    };
    
    const getOneCompra = async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const sql = `SELECT * FROM COMPRA WHERE id = ${id}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            };
            if(result.length > 0){
                res.status(200).json(result);
            }
            else{
                res.send(`No hay una compra  con el id ${id}`)
            }
        });
        
    };
    

    const updateCompra = async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const {CANTIDAD,TOTAL,PROVEEDOR_ID,FECHA } = req.body;
    
        const compra = {
            CANTIDAD,TOTAL,PROVEEDOR_ID,FECHA
        }
       
        const sql = "UPDATE COMPRA SET ? WHERE id = ?"
    
        await connection.query(sql, [compra, id] ,(error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Compra Actualizada"})
            }
        });
        
    };
    
    
    const deleteCompra = async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const sql = `DELETE FROM COMPRA WHERE id = ${id}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.send(`Compra  con ${id} eliminada`)
            }
        });
        
    };

     
    module.exports = {
        getCompra,
        addCompra,
        getOneCompra,
        updateCompra,
        deleteCompra 


    
    }
