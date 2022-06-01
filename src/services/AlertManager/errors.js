// Tableau des erreurs
// Chaque code erreur doit contenir un titre et un message
const errors = {
  400: {
    titre: 'TITRE_ERREUR_SAISIE',
    message: 'MESSAGE_ERREUR_SAISIE',
  },
  401: {
    titre: 'TITRE_ERREUR_AUTHENTIFICATION',
    message: 'MESSAGE_ERREUR_AUTHENTIFICATION',
  },
  404: {
    titre: 'TITRE_ERREUR_RESSOURCES',
    message: 'MESSAGE_ERREUR_RESSOURCES',
  },
  default: {
    titre: 'TITRE_ERREUR_INATTENDUE',
    message: 'MESSAGE_ERREUR_INATTENDUE',
  },
};

// Fonction retournant le titre et le message associé à un code d'erreur
export const getError = (code, errorMessage) => {
  let titre;
  let message;

  if (errors[code]) {
    titre = errors[code].titre;
  } else {
    titre = errors.default.titre;
  }

  if (errorMessage) {
    if (typeof errorMessage === 'object') {
      [[message]] = Object.values(errorMessage);
    } else {
      message = errorMessage;
    }
  }

  // Si le message n'est pas en majuscule ce n'est pas une conctante de traduction donc on le reset
  if (message && message !== message.toUpperCase()) {
    message = undefined;
  }

  if (!message) {
    message = errors[code] ? errors[code].message : errors.default.message;
  }
  return { titre, message };
};

export default getError;
