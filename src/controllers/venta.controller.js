import db from "../database/db"


const getVenta = async (req, res) => {
    const connection = await db.connectToDatabase();
    const sql = 'SELECT * FROM VENTA';
    const results = await connection.execute(sql);
    res.status(200).json(results.rows)
    await connection.close();
    console.log('Conexión cerrada');
}
  

    const addVenta = async (req, res) =>{
        const connection = await getConnection();
        const {IDVENTA, CANTIDAD,FECHA,VENDEDOR_ID_VENDEDOR,ESTADOVENTA_ID,VENDEDOR_ID_CLIENTE} = req.body;
        const sql = "INSERT INTO VENTA SET ?";
        const venta = {
            IDVENTA, CANTIDAD,FECHA,VENDEDOR_ID_VENDEDOR,ESTADOVENTA_ID,VENDEDOR_ID_CLIENTE
        }
        await connection.query(sql,venta, (error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Venta creada"})
            }
        });
        
    };
    
    const getOneVenta = async (req, res) =>{
        const connection = await getConnection();
        const { IDVENTA } = req.params;
        const sql = `SELECT * FROM VENTA WHERE IDVENTA = ${IDVENTA}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            };
            if(result.length > 0){
                res.status(200).json(result);
            }
            else{
                res.send(`No hay una Venta  con el IDVENTA ${IDVENTA}`)
            }
        });
        
    };
    

    const updateVenta = async (req, res) =>{
        const connection = await getConnection();
        const { IDVENTA } = req.params;
        const { CANTIDAD,FECHA,VENDEDOR_ID_VENDEDOR,ESTADOVENTA_ID,VENDEDOR_ID_CLIENTE } = req.body;
    
        const venta = {
            CANTIDAD,FECHA,VENDEDOR_ID_VENDEDOR,ESTADOVENTA_ID,VENDEDOR_ID_CLIENTE
        }
       
        const sql = "UPDATE VENTA SET ? WHERE IDVENTA = ?"
    
        await connection.query(sql, [venta, IDVENTA] ,(error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Venta Actualizada"})
            }
        });
        
    };
    
    
    const deleteVenta = async (req, res) =>{
        const connection = await getConnection();
        const { IDVENTA } = req.params;
        const sql = `DELETE FROM VENTA WHERE IDVENTA = ${IDVENTA}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.send(`Venta  con ${IDVENTA} eliminada`)
            }
        });
        
    };

     
    module.exports = {
        getVenta,
        addVenta,
        getOneVenta,
        updateVenta,
        deleteVenta


    
    }
