// JavaScript (Gestión de Personal)
const gestionPersonalForm = document.getElementById('gestionPersonalForm');

gestionPersonalForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(gestionPersonalForm);
    const datosPersonal = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/gestionar-personal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosPersonal)
        });
        
        if (response.ok) {
            alert('Datos de personal gestionados exitosamente');
            gestionPersonalForm.reset();
        } else {
            throw new Error('Error al gestionar datos de personal');
        }
    } catch (error) {
        console.error(error);
        alert('Hubo un error al gestionar datos de personal');
    }
});


//backend
// Node.js (Endpoint de Gestión de Personal)
app.post('/gestionar-personal', (req, res) => {
    const datosPersonal = req.body;
    // Lógica para gestionar datos de personal, como actualizar horarios y disponibilidad
    console.log('Datos de personal gestionados:', datosPersonal);
    res.sendStatus(200);
});
