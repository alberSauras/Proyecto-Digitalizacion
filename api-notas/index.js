const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API de Notas funcionando!');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});


let notas = []; // Simulación temporal hasta conectar la base de datos

// Crear nota
app.post('/notas', (req, res) => {
    const nuevaNota = req.body;
    notas.push(nuevaNota);
    res.status(201).json(nuevaNota);
});

// Obtener todas las notas
app.get('/notas', (req, res) => {
    res.json(notas);
});

// Actualizar nota
app.put('/notas/:id', (req, res) => {
    const { id } = req.params;
    const nuevaInfo = req.body;
    notas = notas.map(nota => (nota.id == id ? { ...nota, ...nuevaInfo } : nota));
    res.json({ mensaje: "Nota actualizada", nuevaInfo });
});

// Eliminar nota
app.delete('/notas/:id', (req, res) => {
    const { id } = req.params;
    notas = notas.filter(nota => nota.id != id);
    res.json({ mensaje: "Nota eliminada" });
});

app.listen(3000, () => console.log('API funcionando en puerto 3000'));

const { Client } = require('pg');
const express = require('express');
app.use(express.json());

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false } // Necesario para Render
});

client.connect();

// Obtener todas las notas desde la base de datos
app.get('/notas', async (req, res) => {
    const result = await client.query('SELECT * FROM notas');
    res.json(result.rows);
});

// Crear una nueva nota en la base de datos
app.post('/notas', async (req, res) => {
    const { titulo, contenido } = req.body;
    await client.query('INSERT INTO notas (titulo, contenido) VALUES ($1, $2)', [titulo, contenido]);
    res.status(201).json({ mensaje: "Nota guardada" });
});

app.listen(3000, () => console.log('API conectada a la base de datos'));


