// Obtener referencia al formulario de citas
const appointmentForm = document.getElementById('appointmentForm');

// Obtener referencia a la lista de citas
const appointmentsList = document.getElementById('appointmentsList');

// Manejar envío del formulario de citas
appointmentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Obtener valores del formulario de citas
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const specialty = document.getElementById('specialty').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  // Crear elemento de cita
  const appointmentItem = document.createElement('div');
  appointmentItem.classList.add('appointment');
  appointmentItem.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Correo Electrónico:</strong> ${email}</p>
    <p><strong>Especialidad:</strong> ${specialty}</p>
    <p><strong>Fecha:</strong> ${date}</p>
    <p><strong>Hora:</strong> ${time}</p>
  `;

  // Agregar cita a la lista
  appointmentsList.appendChild(appointmentItem);

  // Limpiar formulario de citas
  appointmentForm.reset();
});


