document.addEventListener('DOMContentLoaded', () => {
    let cube = document.querySelector('.cube');
    let scrollPosition = 0;

    window.addEventListener('scroll', () => {
        let newScrollPosition = window.scrollY;
        let delta = newScrollPosition - scrollPosition;

        // Ajuster les calculs pour une rotation plus lente et synchronisée
        let rotateX = (newScrollPosition / window.innerHeight) * 360 * 0.75; // Rotation complète sur la hauteur de la fenêtre
        let rotateY = (newScrollPosition / window.innerWidth) * 360 * 0.75;  // Rotation complète sur la largeur de la fenêtre

        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        scrollPosition = newScrollPosition;
    });

    function updateClock() {
        const clockElement = document.getElementById('clock');
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);
    updateClock(); // Initial call to display the clock immediately
});