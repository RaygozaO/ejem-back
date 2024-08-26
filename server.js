
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const db = require("./db");

app.use(cors());

app.get('/data', (req, res) => {
    const codigoPostal = req.query.cp;
    const query = `
        SELECT 
            c.id_codigopostal, 
            c.nombrecolonia, 
            m.nombremunicipio, 
            e.nombreentidad 
        FROM 
            colonias c 
        JOIN 
            municipio m ON c.id_municipio = m.idmunicipio 
        JOIN 
            entidadfederativa e ON m.id_entidadfederativa = e.identidadfederativa 
        JOIN 
            codigopostal cp ON c.id_codigopostal = cp.idcodigopostal 
        WHERE 
            cp.codigopostal = ?`;

    db.query(query,[codigoPostal], (err, data) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.json(data);
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})