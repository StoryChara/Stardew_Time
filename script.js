let tiempoInicio;

// Cargar la hora de inicio desde el localStorage o establecerla si no existe
if (localStorage.getItem('tiempoInicio')) {
    tiempoInicio = parseFloat(localStorage.getItem('tiempoInicio'));
} else {
    // Establecer el tiempo actual como el tiempo de inicio
    tiempoInicio = Date.now();
    localStorage.setItem('tiempoInicio', tiempoInicio);
}

function mostrarHora() {
    const reloj = document.getElementById('reloj');
    
    // Obtener el tiempo actual y calcular el tiempo transcurrido desde el inicio
    const tiempoActual = Date.now();
    const tiempoTranscurrido = tiempoActual - tiempoInicio;

    // Calcular los segundos virtuales (1 segundo virtual cada 2 segundos reales)
    const segundosVirtuales = (tiempoTranscurrido / 1000) / 2; // Dividimos por 2 para que el reloj avance más lento

    // Calculamos las horas, minutos y segundos virtuales
    const horas = Math.floor(segundosVirtuales / 3600) % 24;
    const minutos = Math.floor((segundosVirtuales % 3600) / 60);
    const segundos = Math.floor(segundosVirtuales % 60);
    
    // Formateamos la hora virtual para que siempre tenga dos dígitos en horas, minutos y segundos
    const horaFormateada = 
        String(horas).padStart(2, '0') + ":" +
        String(minutos).padStart(2, '0') + ":" +
        String(segundos).padStart(2, '0');

    reloj.textContent = horaFormateada;
}

// Actualizamos el reloj cada segundo real
setInterval(mostrarHora, 1000);
