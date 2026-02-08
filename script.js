// CONFIGURACIÓN
const fechaInicio = new Date(2025, 0, 21, 0, 0); // Tu fecha real
const texto = document.getElementById('typewriter').innerText;
document.getElementById('typewriter').innerText = ""; // Limpiamos para el efecto

// 1. Efecto de Máquina de Escribir
let i = 0;
function typeWriter() {
    if (i < texto.length) {
        document.getElementById('typewriter').innerHTML += texto.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // Velocidad de escritura
    }
}

// 2. Lógica del Contador
function updateTimer() {
    const ahora = new Date();
    const diff = ahora - fechaInicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    document.getElementById('time-string').innerText = 
        `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
}

// Iniciar todo
window.onload = () => {
    typeWriter();
    setInterval(updateTimer, 1000);
    updateTimer();
};

// Dentro de tu window.onload en script.js
window.onload = () => {
    typeWriter();
    setInterval(updateTimer, 1000);
    updateTimer();

    // --- LÓGICA DE AUDIO ---
    const musica = document.getElementById('musica-fondo');
    musica.volume = 1.0; // Volumen al 10%

    // Esta es la clave: el navegador espera un toque
    document.addEventListener('click', () => {
        musica.play().catch(e => console.log("Error:", e));
    }, { once: true });
};

// Dentro de tu window.onload o al final del script.js
const musica = document.getElementById('musica-fondo');
const cta = document.getElementById('cta-click');

document.addEventListener('click', () => {
    // 1. Reproduce la música
    musica.play().catch(e => console.log("Error:", e));
    
    // 2. Hace que el texto se desvanezca suavemente
    if (cta) {
        cta.style.transition = "opacity 0.8s ease"; 
        cta.style.opacity = "0";
        
        // 3. Lo elimina por completo después de que sea invisible
        setTimeout(() => {
            cta.style.display = 'none';
        }, 800);
    }
}, { once: true }); // Esto asegura que solo pase la primera vez