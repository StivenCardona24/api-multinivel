/*import db from "../database/db"


const getVendedorPromocion = async (req, res) => {
    const connection = await db.connectToDatabase();
    const sql = 'SELECT * FROM VENDEDOR_PROMOCION';
    const results = await connection.execute(sql);
    res.status(200).json(results.rows)
    await connection.close();
    console.log('Conexión cerrada');
}
  

    const addVendedorPromocion = async (req, res) =>{
        const connection = await getConnection();
        const {ID, NOMBRE} = req.body;
        const sql = "INSERT INTO VENDEDOR_PROMOCION SET ?";
        const vendedorPromocion = {
            ID, NOMBRE
        }
        await connection.query(sql,vendedorPromocion, (error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "promosion del vendedor creada"})
            }
        });
        
    };
    
    const getOneVendedorPromocion = async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const sql = `SELECT * FROM VENDEDOR_PROMOCION WHERE id = ${id}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            };
            if(result.length > 0){
                res.status(200).json(result);
            }
            else{
                res.send(`No hay una promosion del vendedor  con el id ${id}`)
            }
        });
        
    };
    

    const updateVendedorPromocion = async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const {nombre } = req.body;
    
        const vendedorPromocion = {
            nombre
        }
       
        const sql = "UPDATE VENDEDOR_PROMOCION SET ? WHERE id = ?"
    
        await connection.query(sql, [vendedorPromocion, id] ,(error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "promosion del vendedor Actualizada"})
            }
        });
        
    };
    
    
    const deleteVendedorPromocion = async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const sql = `DELETE FROM VENDEDOR_PROMOCION WHERE id = ${id}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.send(`promosion del vendedor  con ${id} eliminada`)
            }
        });
        
    };

     
    module.exports = {
        getCategoria,
        addCategoria,
        getOneCategoria,
        updateCategoria,
        deleteCategoria    


    
    }
*/