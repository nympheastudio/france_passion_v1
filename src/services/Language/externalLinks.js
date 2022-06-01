import * as WebBrowser from 'expo-web-browser';

export const openOrderGuideLink = () => {
  const lang = global.i18n.locale;
  switch (lang) {
    case 'fr':
      WebBrowser.openBrowserAsync('https://commande.france-passion.com/fr_commande.php');
      break;
    case 'en':
      WebBrowser.openBrowserAsync('https://commande.france-passion.com/gb_commande.php');
      break;
    case 'de':
      WebBrowser.openBrowserAsync('https://commande.france-passion.com/de_commande.php');
      break;
    default:
      WebBrowser.openBrowserAsync('https://commande.france-passion.com/fr_commande.php');
      break;
  }
};

// Fonction permettant l'ouverture du lien d'inscription en fonction de la langue
// dans le navigateur du téléphone
export const openSignupLink = () => {
  const lang = global.i18n.locale;
  switch (lang) {
    case 'fr':
      WebBrowser.openBrowserAsync('https://www.france-passion.com/espaces-adherent-accueillant/mon-espace-adherent?action=inscription');
      break;
    case 'en':
      WebBrowser.openBrowserAsync('https://www.france-passion.com/en/members-area/login-to-my-members-area?action=inscription');
      break;
    case 'de':
      WebBrowser.openBrowserAsync('https://www.france-passion.com/de/mein-konto/anmelden?action=inscription');
      break;
    default:
      WebBrowser.openBrowserAsync('https://www.france-passion.com/espaces-adherent-accueillant/mon-espace-adherent?action=inscription');
      break;
  }
};

// Fonction permettant l'ouverture du lien de réinitialisation du mot de passe
// en fonction de la langue
export const openResetPasswordLink = () => {
  const lang = global.i18n.locale;
  switch (lang) {
    case 'fr':
      WebBrowser.openBrowserAsync('https://www.france-passion.com/espaces-adherent-accueillant/mon-espace-adherent?action=recuperationMotDePasse');
      break;
    case 'en':
      WebBrowser.openBrowserAsync('https://www.france-passion.com/en/members-area?action=recuperationMotDePasse');
      break;
    case 'de':
      WebBrowser.openBrowserAsync('https://www.france-passion.com/de/mein-konto/anmelden?action=recuperationMotDePasse');
      break;
    default:
      WebBrowser.openBrowserAsync('https://www.france-passion.com/espaces-adherent-accueillant/mon-espace-adherent?action=recuperationMotDePasse');
      break;
  }
};
