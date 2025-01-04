/*document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('botRegis').addEventListener('click', function () {
  */      
        const formuCurso = document.getElementById('registroForm');

        // Agregar un evento al formulario para enviar los datos a la API
        formuCurso.addEventListener('submit', (event) => {
            event.preventDefault();// Evita que la página se recargue al enviar el formulario
            // Validar los campos
        const nomId = document.getElementById('nombreCUs').value;
        const dniId = document.getElementById('DNIUs').value;
        const provId = document.getElementById('provinciaUs').value;
        const ciuId = document.getElementById('ciudadUs').value;
        const telefId = document.getElementById('telefonoUs').value;
        const emailId = document.getElementById('correoEUs').value;
        const contraId = document.getElementById('contraUs').value;

        fetch('https://proyectof2024pd-default-rtdb.firebaseio.com/alummnos.json', {
            method: 'POST',
            body: JSON.stringify({
                nombreAlumno: nomId,
                dniAlumno: dniId,
                provinciaAlumno: provId,
                ciudadAlumno: ciuId,
                telefonoAlumno: telefId,
                correoEAlumno: emailId,
                contraseñaAlumno: contraId,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al agregar el curso');
            }
            alert('El curso ha sido agregado con éxito');
        })
        .catch(error => {
            console.error('Error al enviar los datos: ', error);
            alert('Hubo un problema al enviar los datos.');
        });
        formuCurso.reset();    
    })

        

        // Verificar que los campos no estén vacíos
        /*if (
            nomId.value.trim() === "" ||
            dniId.value.trim() === "" ||
            provId.value.trim() === "" ||
            ciuId.value.trim() === "" ||
            telefId.value.trim() === "" ||
            emailId.value.trim() === "" ||
            contraId.value.trim() === ""
        ) {
            alert('Por favor, completa todos los campos.');
            return;
        }*/

        /*console.log("Datos enviados: ", {
            nombreAlumno: nomId.value,
            dniAlumno: dniId.value,
            provinciaAlumno: provId.value,
            ciudadAlumno: ciuId.value,
            telefonoAlumno: telefId.value,
            correoEAlumno: emailId.value,
            contraseñaAlumno: contraId.value,
        });
        */

        // POST a la API
        
        
