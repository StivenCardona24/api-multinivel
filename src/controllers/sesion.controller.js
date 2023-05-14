import db from "../database/db"

const login = async (req, res) => {
    const connection = await db.connectToDatabase();
    const { EMAIL, PASSWORD } = req.body;
    const sql = 'SELECT * FROM VENDEDOR WHERE EMAIL = ? AND PASSWORD = ?';
    const results = await connection.execute(sql, [EMAIL, PASSWORD]);
    await connection.close();
    if (results.rows.length > 0) {
        // Las credenciales son correctas, crear sesión de usuario
        // Aquí puede almacenar la sesión de usuario en una cookie o en una base de datos, dependiendo de sus necesidades
        res.status(200).send('Inicio de sesión exitoso');
    } else {
        // Las credenciales son incorrectas, enviar respuesta de error al cliente
        res.status(401).send('Credenciales incorrectas');
    }
}

     
module.exports = {
login
}
