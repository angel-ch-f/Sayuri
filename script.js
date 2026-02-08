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