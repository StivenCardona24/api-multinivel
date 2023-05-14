import db from "../database/db"


const getProducto = async (req, res) => {
    const connection = await db.connectToDatabase();
    const sql = 'SELECT * FROM PRODUCTO';
    const results = await connection.execute(sql);
    res.status(200).json(results.rows)
    await connection.close();
    console.log('Conexión cerrada');
}
  

    const addProducto = async (req, res) =>{
        const connection = await getConnection();
        const {ID_PRODUCTO, NOMBRE, DESCRIPCION, PRECIOVENTA, CATEGORIA_ID} = req.body;
        const sql = "INSERT INTO PRODUCTO SET ?";
        const producto = {
            ID_PRODUCTO, NOMBRE, DESCRIPCION,PRECIOVENTA, CATEGORIA_ID
        }
        await connection.query(sql,producto, (error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Producto creado"})
            }
        });
        
    };
    
    const getOneProducto = async (req, res) =>{
        const connection = await getConnection();
        const { ID_PRODUCTO } = req.params;
        const sql = `SELECT * FROM PRODUCTO WHERE ID_PRODUCTO = ${ID_PRODUCTO}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            };
            if(result.length > 0){
                res.status(200).json(result);
            }
            else{
                res.send(`No hay un Producto  con el ID_PRODUCTO ${ID_PRODUCTO}`)
            }
        });
        
    };
    

    const updateProducto = async (req, res) =>{
        const connection = await getConnection();
        const { ID_PRODUCTO } = req.params;
        const {NOMBRE, DESCRIPCION, PRECIOVENTA,CATEGORIA_ID } = req.body;
    
        const producto = {
            NOMBRE, DESCRIPCION, PRECIOVENTA, CATEGORIA_ID
        }
       
        const sql = "UPDATE PRODUCTO SET ? WHERE ID_PRODUCTO = ?"
    
        await connection.query(sql, [producto, ID_PRODUCTO] ,(error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Producto Actualizado"})
            }
        });
        
    };
    
    
    const deleteProducto = async (req, res) =>{
        const connection = await getConnection();
        const { idID_PRODUCTO } = req.params;
        const sql = `DELETE FROM PRODUCTO WHERE ID_PRODUCTO = ${ID_PRODUCTO}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.send(`Producto  con ${ID_PRODUCTO} eliminado`)
            }
        });
        
    };

     
    module.exports = {
        getProducto,
        addProducto,
        getOneProducto,
        updateProducto,
        deleteProducto



    
    }
