import db from "../database/db"


const getCategoria = async (req, res) => {
    const connection = await db.connectToDatabase();
    const sql = 'SELECT * FROM CATEGORIA';
    const results = await connection.execute(sql);
    res.status(200).json(results.rows)
    await connection.close();
    console.log('Conexión cerrada');
}

    

    module.exports = {
        getCategoria,

    
    }
