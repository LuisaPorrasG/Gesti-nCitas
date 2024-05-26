// JavaScript (Agenda de Citas)
const citaForm = document.getElementById('citaForm');

citaForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(citaForm);
    const cita = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/agendar-cita', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cita)
        });
        
        if (response.ok) {
            alert('Cita agendada exitosamente');
            citaForm.reset();
        } else {
            throw new Error('Error al agendar cita');
        }
    } catch (error) {
        console.error(error);
        alert('Hubo un error al agendar cita');
    }
});
