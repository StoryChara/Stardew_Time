const seasons = [ 
    'Primavera <i class="fa-solid fa-seedling"></i>',
    'Verano <i class="fa-solid fa-umbrella-beach"></i>',
    'Otoño <i class="fa-brands fa-canadian-maple-leaf"></i>',
    'Invierno <i class="fa-regular fa-snowflake"></i>' 
];

const days = [  
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo' 
];

const weather = [ 
    '--',
    'Soleado <i class="fa-solid fa-sun"></i>',
    'Lluvioso <i class="fa-solid fa-cloud-showers-heavy"></i>',
    'Viento <i class="fa-solid fa-wind"></i>',
    'Nublado <i class="fa-solid fa-cloud-sun"></i>',
    'Tormenta <i class="fa-solid fa-bolt"></i>',
    'Nevado <i class="fa-solid fa-snowflake"></i>',
    'Lluvia Verde <i class="fa-solid fa-bacterium"></i>',
    'Lluvia Ácida <i class="fa-solid fa-triangle-exclamation"></i>'
];

const lucky = [ 
    '--',
    'Los espíritus están muy felices <i class="fa-regular fa-face-laugh-beam"></i>',
    'Los espíritus están de buen humor <i class="fa-regular fa-face-smile-beam"></i>',
    'Los espíritus están neutros <i class="fa-regular fa-face-meh"></i>',
    'Los espíritus están molestos <i class="fa-regular fa-face-frown-open"></i>',
    'Los espíritus están muy descontentos <i class="fa-regular fa-face-frown"></i>' 
];

const buttons = [
    { name: "Home", href: "index.html" },
    { name: "Amelia", href: "Amelia.html" },
    { name: "Marietta", href: "Marietta.html"},
    { name: "Haru", href: "Haru.html"}
  ];
  
  function renderButtons(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
  
    buttons.forEach(button => {
      const a = document.createElement("a");
      a.href = button.href;
      a.textContent = button.name;
      a.className = "button";
      container.appendChild(a);
    });
  }
  