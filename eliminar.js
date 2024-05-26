// JavaScript (Eliminar Cita)
const eliminarCitaForm = document.getElementById('eliminarCitaForm');

eliminarCitaForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(eliminarCitaForm);
    const citaId = formData.get('citaId');

    try {
        const response = await fetch('/eliminar-cita', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ citaId })
        });
        
        if (response.ok) {
            alert('Cita eliminada exitosamente');
            eliminarCitaForm.reset();
        } else {
            throw new Error('Error al eliminar cita');
        }
    } catch (error) {
        console.error(error);
        alert('Hubo un error al eliminar cita');
    }
});

// Node.js (Endpoint de Eliminación de Citas)
app.delete('/eliminar-cita', (req, res) => {
    const { citaId } = req.body;
    const sql = 'DELETE FROM citas WHERE id = ?';

    db.query(sql, citaId, (err, result) => {
        if (err) {
            console.error('Error al eliminar cita:', err);
            res.status(500).send('Error al eliminar cita');
        } else {
            console.log('Cita eliminada:', result);
            res.sendStatus(200);
        }
    });
});
