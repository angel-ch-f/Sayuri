// CONFIGURACIÓN
const fechaInicio = new Date(2025, 0, 21, 0, 0); 
const textoAEscribir = "te quiero mucho amiguita linda."; // Definimos el texto aquí para no borrar el HTML
let i = 0;

// 1. Efecto de Máquina de Escribir
function typeWriter() {
    if (i < textoAEscribir.length) {
        document.getElementById('typewriter').innerHTML += textoAEscribir.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
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

// 3. INICIAR TODO (Un solo window.onload)
window.onload = () => {
    // El contador inicia de inmediato de fondo
    setInterval(updateTimer, 1000);
    updateTimer();

    const overlay = document.getElementById('overlay');
    const btn = document.getElementById('btn-comenzar');
    const musica = document.getElementById('musica-fondo');

    // El evento principal es el clic en el botón del overlay
    btn.addEventListener('click', () => {
        musica.play().catch(e => console.log("Error de audio:", e));
        
        // Iniciamos la escritura al presionar
        typeWriter(); 

        // Desvanecimiento del overlay
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 2000);
    }, { once: true });
};