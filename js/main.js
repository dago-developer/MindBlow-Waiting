// Fecha de entrega: 2 de diciembre
const targetDate = new Date('2024-12-02T00:00:00');

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    // Si ya pasó la fecha, detén el contador
    if (difference <= 0) {
        document.getElementById("countdown").innerHTML = "¡Estamos listos!";
        return;
    }

    // Convertir diferencia en días, horas, minutos y segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Actualizar elementos del DOM
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Actualiza cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Llama inmediatamente al cargar
