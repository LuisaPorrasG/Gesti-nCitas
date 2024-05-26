// Node.js (Endpoint de Administración de Citas)
app.post('/administrar-cita', (req, res) => {
    const cita = req.body;
    const sql = 'UPDATE citas SET confirmada = ? WHERE id = ?';

    db.query(sql, [cita.confirmada, cita.id], (err, result) => {
        if (err) {
            console.error('Error al administrar cita:', err);
            res.status(500).send('Error al administrar cita');
        } else {
            console.log('Cita administrada:', result);
            res.sendStatus(200);
        }
    });
});
