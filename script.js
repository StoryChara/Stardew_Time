// Definimos el "momento inicial" desde el cual comienza el reloj (puedes cambiar esta fecha)
const momentoInicial = new Date('2024-09-01T00:00:00Z').getTime(); // Momento inicial en UTC

function mostrarHora() {
    const reloj = document.getElementById('reloj');
    
    // Obtén el tiempo actual
    const tiempoActual = Date.now();
    
    // Calcula el tiempo transcurrido desde el "momento inicial"
    const tiempoTranscurrido = tiempoActual - momentoInicial;

    // El tiempo virtual transcurre a la mitad de la velocidad real (dividimos por 2)
    const segundosVirtuales = (tiempoTranscurrido / 1000) / 2;

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

