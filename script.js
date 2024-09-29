let segundosVirtuales = 0;

function mostrarHora() {
    const reloj = document.getElementById('reloj');
    
    // El tiempo real transcurrido lo ralentizamos a la mitad (cada segundo real son 0.5 segundos virtuales)
    segundosVirtuales += 0.5;

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

// Actualizamos el reloj cada segundo real, pero con el tiempo virtual ralentizado
setInterval(mostrarHora, 1000);
