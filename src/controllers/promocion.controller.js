import db from "../database/db"


const getPromocion = async (req, res) => {
    const connection = await db.connectToDatabase();
    const sql = 'SELECT * FROM Promocion';
    const results = await connection.execute(sql);
    res.status(200).json(results.rows)
    await connection.close();
    console.log('Conexión cerrada');
}
  

    const addPromocion = async (req, res) =>{
        const connection = await getConnection();
        const {IDPROMOCION, nombre,DESCRIPCION,DESCUENTO,GANANCIA} = req.body;
        const sql = "INSERT INTO PROMOCION SET ?";
        const promocion = {
            IDPROMOCION, nombre,DESCRIPCION,DESCUENTO,GANANCIA
        }
        await connection.query(sql,promocion, (error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Promocion creada"})
            }
        });
        
    };
    
    const getOnePromocion = async (req, res) =>{
        const connection = await getConnection();
        const { IDPROMOCION } = req.params;
        const sql = `SELECT * FROM PROMOCION WHERE IDPROMOCION = ${IDPROMOCION}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            };
            if(result.length > 0){
                res.status(200).json(result);
            }
            else{
                res.send(`No hay una Promocion  con el IDPROMOCION ${IDPROMOCION}`)
            }
        });
        
    };
    

    const updatePromocion = async (req, res) =>{
        const connection = await getConnection();
        const { IDPROMOCION } = req.params;
        const {nombre,DESCRIPCION,DESCUENTO,GANANCIA } = req.body;
    
        const promocion = {
            nombre,DESCRIPCION,DESCUENTO,GANANCIA
        }
       
        const sql = "UPDATE PROMOCION SET ? WHERE IDPROMOCION = ?"
    
        await connection.query(sql, [promocion, IDPROMOCION] ,(error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Promocion Actualizada"})
            }
        });
        
    };
    
    
    const deletePromocion = async (req, res) =>{
        const connection = await getConnection();
        const { IDPROMOCION } = req.params;
        const sql = `DELETE FROM PROMOCION WHERE IDPROMOCION = ${IDPROMOCION}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.send(`Promocion  con ${IDPROMOCION} eliminada`)
            }
        });
        
    };

     
    module.exports = {
        getPromocion,
        addPromocion,
        getOnePromocion,
        updatePromocion,
        deletePromocion    


    
    }
