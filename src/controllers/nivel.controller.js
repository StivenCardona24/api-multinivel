import db from "../database/db"


const getNivel = async (req, res) => {
    const connection = await db.connectToDatabase();
    const sql = 'SELECT * FROM NIVEL';
    const results = await connection.execute(sql);
    res.status(200).json(results.rows)
    await connection.close();
    console.log('Conexión cerrada');
}
  

    const addNivel = async (req, res) =>{
        const connection = await getConnection();
        const {ID, NOMBRE,PORCENTAJE} = req.body;
        const sql = "INSERT INTO NIVEL SET ?";
        const nivel = {
            ID, NOMBRE, PORCENTAJE
        }
        await connection.query(sql,nivel, (error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Nivel creado"})
            }
        });
        
    };
    
    const getOneNivel = async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const sql = `SELECT * FROM NIVEL WHERE id = ${id}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            };
            if(result.length > 0){
                res.status(200).json(result);
            }
            else{
                res.send(`No hay un Nivel  con el id ${id}`)
            }
        });
        
    };
    

    const updateNivel = async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const {nombre,PORCENTAJE } = req.body;
    
        const nivel = {
            nombre, PORCENTAJE
        }
       
        const sql = "UPDATE NIVEL SET ? WHERE id = ?"
    
        await connection.query(sql, [nivel, id] ,(error, results)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.status(200).json({message: "Nivel Actualizado"})
            }
        });
        
    };
    
    
    const deleteNivel = async (req, res) =>{
        const connection = await getConnection();
        const { id } = req.params;
        const sql = `DELETE FROM NIVEL WHERE id = ${id}`;
        await connection.query(sql, (error, result)=>{
            if(error){
                res.status(500);
                res.send(error);
            }
            else{
                res.send(`Nivel  con ${id} eliminado`)
            }
        });
        
    };

     
    module.exports = {
        getNivel,
        addNivel,
        getOneNivel,
        updateNivel,
        deleteNivel    


    
    }
