// Funzione per gestire la visibilità delle bandiere
function toggleFlags() {
  const isMobile = window.innerWidth <= 768; // Controlla se è un dispositivo mobile
  const flagMobile = document.querySelector('.flag-mobile');
  const flagDesktop = document.querySelector('.flag-desktop');

  if (flagMobile && flagDesktop) {
    if (isMobile) {
      flagMobile.style.display = 'block';
      flagDesktop.style.display = 'none';
    } else {
      flagMobile.style.display = 'none';
      flagDesktop.style.display = 'block';
    }
  }
}

// Aggiungi un event listener per il ridimensionamento della finestra
window.addEventListener('resize', toggleFlags);

// Esegui la funzione una volta al caricamento della pagina
document.addEventListener('DOMContentLoaded', toggleFlags);
