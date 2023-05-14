import db from "../database/db"


const getDespacho = async (req, res) => {
    const connection = await db.connectToDatabase();
    const sql = 'SELECT * FROM DESPACHO';
    const results = await connection.execute(sql);
    res.status(200).json(results.rows)
    await connection.close();
    console.log('Conexión cerrada');
}
  

    const addDespacho = async (req, res) =>{
        const connection = await getConnection();
        const {IDDESPACHO, VENTA_IDVENTA,ESTADODESPACHO_ID,FECHADESPACHO,FECHAENTREGA} = req.body;
        const sql = "INSERT INTO DESPACHO SET ?";
        const despacho = {
            IDDESPACHO, VENTA_IDVENTA,ESTADODESPACHO_ID,FECHADESPACHO,FECHAENTREGA
        }
        await connection.query(sql,despacho, (error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Despacho creada"})
            }
        });
        
    };
    
    const getOneDespacho = async (req, res) =>{
        const connection = await getConnection();
        const { IDDESPACHO } = req.params;
        const sql = `SELECT * FROM DESPACHO WHERE IDDESPACHO = ${IDDESPACHO}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            };
            if(result.length > 0){
                res.status(200).json(result);
            }
            else{
                res.send(`No hay una Despacho  con el id ${IDDESPACHO}`)
            }
        });
        
    };
    

    const updateDespacho = async (req, res) =>{
        const connection = await getConnection();
        const { IDDESPACHO } = req.params;
        const {VENTA_IDVENTA,ESTADODESPACHO_ID,FECHADESPACHO,FECHAENTREGA } = req.body;
    
        const despacho = {
            VENTA_IDVENTA,ESTADODESPACHO_ID,FECHADESPACHO,FECHAENTREGA
        }
       
        const sql = "UPDATE DESPACHO SET ? WHERE IDDESPACHO = ?"
    
        await connection.query(sql, [despacho, IDDESPACHO] ,(error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Despacho Actualizado"})
            }
        });
        
    };
    
    
    const deleteDespacho = async (req, res) =>{
        const connection = await getConnection();
        const { IDDESPACHO } = req.params;
        const sql = `DELETE FROM DESPACHO WHERE IDDESPACHO = ${IDDESPACHO}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.send(`Despacho  con ${IDDESPACHO} eliminada`)
            }
        });
        
    };

     
    module.exports = {
        getDespacho,
        addDespacho,
        getOneDespacho,
        updateDespacho,
        deleteDespacho    


    
    }
