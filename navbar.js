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
// Funzione per gestire la visibilità della navbar e mantenerla fissa durante lo scroll
function toggleNavbarFixed() {
  const navbar = document.querySelector('.navbar-logo-left'); // Seleziona la navbar
  if (navbar) {
    // Verifica la posizione di scroll
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-fixed'); // Aggiunge la classe per renderla fissa
    } else {
      navbar.classList.remove('navbar-fixed'); // Rimuove la classe quando non è scrollato
    }
  }
}

// Aggiungi un event listener per monitorare lo scroll della pagina
window.addEventListener('scroll', toggleNavbarFixed);

// Esegui la funzione una volta al caricamento della pagina per gestire il caso in cui la pagina venga caricata con lo scroll già verso il basso
document.addEventListener('DOMContentLoaded', toggleNavbarFixed);
