// Router services props
// pageName : constante contenant le nom de la page
// state : state founi par react-native navigation
import { Alert } from 'react-native';
import * as Updates from 'expo-updates';




import {
  PAGE_ETAPE,
  PAGE_FICHE,
  PAGE_LISTE,
  PAGE_FAVORIS,
  PAGE_COMPTE,
  PAGE_AVIS,
} from '@components/navigations/routes';

// Fonction retournant un booléen si la page fournie est focused
const isPageFocused = (pageName, state) => (
  state.routeNames[state.index] === pageName
);

// Fonction retournant un booléen si la page fournie est la page précédente
const isPagePrevious = (pageName, state) => {
  // On vérifie si il existe au moins une page précédente et courrante (array.length >= 2)
  if (state.history.length >= 2) {
    return state.history[state.history.length - 2].key.includes(pageName);
  }
  return false;
};

// Les 3 fonctions ci-dessous permettent de définir si l'élément de la Tab bar est actif
// Retournent un booléen

// Conditions pour que Etape soit actif:
// La page Etape soit active
// ou que la page Fiche ou Liste soit active ET que la précédente ne soit pas Favoris
export const shouldEtapeBeActive = (state) => {
	
	//console.log(state);
	
  const isEtape = isPageFocused(PAGE_ETAPE, state);
  const isFiche = isPageFocused(PAGE_FICHE, state);
  const isListe = isPageFocused(PAGE_LISTE, state);
  const isPreviousFavoris = isPagePrevious(PAGE_FAVORIS, state);
  return isEtape || ((isFiche || isListe) && !isPreviousFavoris);
};

// Conditions pour que Favoris soit actif:
// La page Favoris soit active
// ou que la page Fiche soit active et que la précédente soit Favoris
export const shouldFavorisBeActive = (state) => {
  const isFavoris = isPageFocused(PAGE_FAVORIS, state);
  const isFiche = isPageFocused(PAGE_FICHE, state);
  const isPreviousFavoris = isPagePrevious(PAGE_FAVORIS, state);
  return isFavoris || (isFiche && isPreviousFavoris);
};

// Conditions pour que Compte soit actif:
// La page Compte soit active
// ou que la page Avis soit active
export const shouldCompteBeActive = (state) => {
  const isCompte = isPageFocused(PAGE_COMPTE, state);
  const isAvis = isPageFocused(PAGE_AVIS, state);
  return isCompte || isAvis;
};

export const translationAlert = (language) => {
  const getErrorData = () => {
    switch (language) {
      case 'de':
        return {
          titre: 'Unerwarteter Fehler',
          message: 'Ein unerwarteter Fehler ist aufgetreten, zögern Sie nicht, ihn uns über das Kontaktformular mitzuteilen.',
          annulerBtn: 'Abbrechen',
          redemarrerBtn: 'Neustarten',
        };
      case 'en':
        return {
          titre: 'Unexpected error',
          message: 'An unexpected error occurred, please contact us using the contact form.',
          annulerBtn: 'Cancel',
          redemarrerBtn: 'Restart',
        };
      default:
        return {
          titre: 'Erreur inattendue',
          message: 'Une erreur inattendue s\'est produite, n\'hésitez pas à nous la faire remonter via le formulaire de contact.',
          annulerBtn: 'Annuler',
          redemarrerBtn: 'Redémarrer',
        };
    }
  };

  const {
    titre,
    message,
    annulerBtn,
    redemarrerBtn,
  } = getErrorData(language);

  Alert.alert(
    titre,
    message,
    [
      { text: annulerBtn, style: 'Cancel' },
      { text: redemarrerBtn, onPress: () => Updates.reloadAsync() },
    ],
    { cancelable: false },
  );
};
