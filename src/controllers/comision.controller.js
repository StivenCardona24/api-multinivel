import db from "../database/db"


const getComision = async (req, res) => {
    const connection = await db.connectToDatabase();
    const sql = 'SELECT * FROM COMISION';
    const results = await connection.execute(sql);
    res.status(200).json(results.rows)
    await connection.close();
    console.log('Conexión cerrada');
}
  

    const addComision = async (req, res) =>{
        const connection = await getConnection();
        const {IDCOMISION, VENDEDOR_ID_VENDEDOR, VENTA_IDVENTA} = req.body;
        const sql = "INSERT INTO COMISION SET ?";
        const comision = {
            IDCOMISION, VENDEDOR_ID_VENDEDOR, VENTA_IDVENTA
        }
        await connection.query(sql,comision, (error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Comision creada"})
            }
        });
        
    };
    
    const getOneComision = async (req, res) =>{
        const connection = await getConnection();
        const { IDCOMISION } = req.params;
        const sql = `SELECT * FROM COMISION WHERE IDCOMISION = ${IDCOMISION}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            };
            if(result.length > 0){
                res.status(200).json(result);
            }
            else{
                res.send(`No hay una Comision  con el IDCOMISION ${IDCOMISION}`)
            }
        });
        
    };
    

    const updateComision = async (req, res) =>{
        const connection = await getConnection();
        const { IDCOMISION } = req.params;
        const {VENDEDOR_ID_VENDEDOR, VENTA_IDVENTA } = req.body;
    
        const comision = {
            VENDEDOR_ID_VENDEDOR, VENTA_IDVENTA
        }
       
        const sql = "UPDATE COMISION SET ? WHERE IDCOMISION = ?"
    
        await connection.query(sql, [comision, IDCOMISION] ,(error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Comision Actualizada"})
            }
        });
        
    };
    
    
    const deleteComision = async (req, res) =>{
        const connection = await getConnection();
        const { IDCOMISION } = req.params;
        const sql = `DELETE FROM COMISION WHERE IDCOMISION = ${IDCOMISION}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.send(`Comision  con ${IDCOMISION} eliminada`)
            }
        });
        
    };

     
    module.exports = {
        getComision,
        addComision,
        getOneComision,
        updateComision,
        deleteComision    


    
    }
