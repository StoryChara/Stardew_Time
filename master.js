const buttons = [
  { name: "Home", href: "index.html" },
  { name: "Cultivo", href: "cultivo.html" },
  { name: "Pesca", href: "pesca.html"}
];

const seasons = [ 
  'Primavera',
  'Verano',
  'Otoño',
  'Invierno' 
];

const weather = [ 
  '--',
  'Soleado',
  'Lluvia',
  'Viento',
  'Nublado',
  'Tormenta',
  'Nevado',
  'Lluvia Verde',
  'Lluvia Ácida'
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

const ubicaciones = [
  "Rio",
  "Lago",
  "Estanque",
  "Cloacas",
  "Minas",
  "Mazmorra",
  "Desierto",
  "Pantano",
  "Madriguera",
  "Isla Jengibre",
  "Océano",
  "Bosque",
  "Mercado"
];