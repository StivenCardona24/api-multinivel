import db from "../database/db"


const getCategoria = async (req, res) => {
    const connection = await db.connectToDatabase();
    const sql = 'SELECT * FROM CATEGORIA';
    const results = await connection.execute(sql);
    res.status(200).json(results.rows)
    await connection.close();
    console.log('Conexión cerrada');
}
  

    const addCategoria = async (req, res) =>{
        const connection = await getConnection();
        const {ID, NOMBRE} = req.body;
        const sql = "INSERT INTO CATEGORIA SET ?";
        const categoria = {
            ID, NOMBRE
        }
        await connection.query(sql,categoria, (error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Categoria creada"})
            }
        });
        
    };
    
    const getOneCategoria = async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const sql = `SELECT * FROM CATEGOTIA WHERE id = ${id}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            };
            if(result.length > 0){
                res.status(200).json(result);
            }
            else{
                res.send(`No hay una categoria  con el id ${id}`)
            }
        });
        
    };
    

    const updateCategoria = async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const {nombre } = req.body;
    
        const categoria = {
            nombre
        }
       
        const sql = "UPDATE CATEGORIA SET ? WHERE id = ?"
    
        await connection.query(sql, [categoria, id] ,(error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Categoria Actualizada"})
            }
        });
        
    };
    
    
    const deleteCategoria = async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const sql = `DELETE FROM CATEGORIA WHERE id = ${id}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.send(`Categoria  con ${id} eliminada`)
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
