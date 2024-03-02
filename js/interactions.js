// Fonction pour faire tourner l'image de 360°
function spinCatgoat() {
    const image = document.getElementById('catgoatIcon');
    image.style.transform = 'rotate(360deg)';
// Ajoute un gestionnaire d'événements pour détecter la fin de l'animation
image.addEventListener('transitionend', function () {
        // Réinitialise l'orientation à 0° sans transition
        image.style.transition = 'none';
        image.style.transform = 'rotate(0deg)';
        
        // Réactive la transition pour les futures rotations
        setTimeout(function () {
            image.style.transition = 'transform 0.5s';
        });
    }, { once: true }); // { once: true } assure que l'événement ne se déclenchera qu'une seule fois
}