
const mysql = require('mysql2');

const conn = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'Oscar*780917',
   database: 'mercurio'
});

conn.connect((err) => {
    if (err) {
        console.error('Error conectando la base de datos',err.stack);
        return;
    }
    console.log('Connectado a la base de datos',conn.threadId);
});

module.exports = conn;