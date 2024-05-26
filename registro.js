// JavaScript (Registro de Pacientes)
const registroForm = document.getElementById('registroForm');

registroForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(registroForm);
    const paciente = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/registrar-paciente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paciente)
        });
        
        if (response.ok) {
            alert('Paciente registrado exitosamente');
            registroForm.reset();
        } else {
            throw new Error('Error al registrar paciente');
        }
    } catch (error) {
        console.error(error);
        alert('Hubo un error al registrar paciente');
    }
});
