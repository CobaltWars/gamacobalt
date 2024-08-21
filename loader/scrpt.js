// Fonction pour montrer la transition
function showTransition() {
    const transition = document.getElementById('page-transition');
    transition.style.opacity = '1';
  }
  
  // Fonction pour cacher la transition
  function hideTransition() {
    const transition = document.getElementById('page-transition');
    transition.style.opacity = '0';
    setTimeout(() => {
      transition.style.display = 'none';
    }, 500);
  }
  
  // Fonction pour simuler le chargement de la page
  function loadPage(url, callback) {
    showTransition();
    
    // Simuler un délai de chargement (à remplacer par un vrai chargement AJAX)
    setTimeout(() => {
      // Ici, vous feriez normalement une requête AJAX pour charger le contenu
      console.log(`Chargement de la page : ${url}`);
      hideTransition();
      if (callback) callback();
    }, 2000);
  }
  
  // Gérer les changements d'état de l'historique (boutons précédent/suivant)
  window.addEventListener('popstate', (e) => {
    loadPage(location.pathname);
  });
  
  // Cacher la transition au chargement initial de la page
  window.addEventListener('load', hideTransition);
  