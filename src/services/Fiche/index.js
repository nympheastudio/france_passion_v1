/* eslint-disable array-callback-return */
import * as WebBrowser from 'expo-web-browser';
import { Linking, Platform, Alert } from 'react-native';
import Moment from 'moment';

// Fonction permettant la gestion du touch des liens dans la fiche accueillant
export const openLink = (url) => {
  // On vérifie la présence d'@ (les accueillants fournissent des adresses emails parfois)
  if (url.match('@') !== null) {
    // Si @, on ouvre l'app mail
    Linking.openURL(`mailto:${url}`);
  } else {
    // sinon on supprime 'https://' si existant pour ouvrir l'url
    const urlToOpen = url.replace('http://', '').replace('https://', '');
    WebBrowser.openBrowserAsync(`http://${urlToOpen}`);
  }
};

// Fonction permettant d'ouvrir l'application téléphone avec un numéro
const makeCall = (phone) => {
  // On supprime les espaces du numéro
  let phoneNumber = phone.replace(/\s+/g, '');

  // On adapte la requête en fonction de la plateform
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phoneNumber}`;
  } else {
    phoneNumber = `tel:${phoneNumber}`;
  }

  // On vérifie si la requête aboutie
  Linking.canOpenURL(phoneNumber)
    .then((supported) => {
      // Dans le cas échant on lance une Alerte
      if (!supported) {
        Alert.alert('Mauvais numéro !');
        return null;
      }
      // Si la requête aboutie on affiche la pop up afin de composer le numéro
      return Linking.openURL(phoneNumber);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Fonction permettant d'afficher le disclaimer avant que l'utilisateur lance l'appel
export const callHost = (phone) => {
  Alert.alert(
    global.i18n.t('TITRE_FICHE_TELEPHONE'),
    global.i18n.t('MESSAGE_FICHE_TELEPHONE'),
    [
      {
        text: global.i18n.t('BT_FICHE_TELEPHONE_ANNULER'),
        onPress: () => console.log('cancel disclaimer'),
        style: 'cancel',
      },
      {
        text: global.i18n.t('BT_FICHE_TELEPHONE_COMPRIS'),
        onPress: () => makeCall(phone),
      },
    ],
    { cancelable: false },
  );
  return null;
};

// Fonction permettant l'ouverture de l'application de carte par défaut
// avec les coordonnées GPS d'un accueillant
export const openItinerary = (marker) => {
  // Définition du format de la requête en fonction de l'OS
  const scheme = Platform.OS === 'ios' ? 'maps:0,0?q=' : 'geo:0,0?q=';
  // Récupération des coordonnées GPS (LatLng)
  const latLng = `${marker.latitude},${marker.longitude}`;
  // Définition de l'url
  const url = `${scheme}${latLng}`;
  // On ouvre l'app avec l'url comprennant les data
  Linking.openURL(url);
};

// Fonction retournant l'index d'une photo dans la gallerie
export const getPhotoIndex = (marker, photo) => {
  const index = marker.photos.findIndex((x) => x.url === photo.url);
  return index;
};

// Fonction retournant les données relatives aux avis d'un accueillant pariculier
// Score global de l'accueillant, son score d'aire et d'acceuil, le nombre d'avis
// Les scores d'accueil et de stationnement à 0 ne sont pas pris en compte dans le calcul
export const getHostReviewInfo = (reviews) => {
  // Définition du nombre d'avis
  const reviewNumber = reviews.length;

  // Initialisation des scores
  let accueilCumulScore = 0;
  let aireCumulScore = 0;

  // On exlcut les avis d'accueil avec note à 0
  // On stoque le nombre d'avis
  // On additionne les scores
  const filteredAccueilReviews = reviews.filter((review) => review.note_accueil !== 0);
  const accueilReviewsNumber = filteredAccueilReviews.length;
  filteredAccueilReviews.map((review) => {
    accueilCumulScore += review.note_accueil;
  });

  // On exlcut les avis de stationnement avec note à 0
  // On stoque le nombre d'avis
  // On additionne les scores
  const filteredAireReviews = reviews.filter((review) => review.note_aire !== 0);
  const aireReviewsNumber = filteredAireReviews.length;
  filteredAireReviews.map((review) => {
    aireCumulScore += review.note_aire;
  });

  // On calcule les scores :
  // On utilise une moyenne pondérée pour le calcul
  // eslint-disable-next-line max-len
  const globalScore = (accueilCumulScore + aireCumulScore) / (accueilReviewsNumber + aireReviewsNumber);
  const accueilScore = Math.floor(accueilCumulScore / accueilReviewsNumber);
  const aireScore = Math.floor(aireCumulScore / aireReviewsNumber);

  return {
    globalScore,
    accueilScore,
    aireScore,
    reviewNumber,
  };
};

// Fonction retournant retournant tous les avis d'un utilisateur depuis un les avis publics
// Triés par date, du plus récent au plus ancien
// Uniquement les 50 premiers (plus récents), si il y a plus de 50 avis.
export const getHostReviews = (reviews, id) => {
  // Récupération des avis liés à l'accueillant
  const hostReviews = reviews.filter((review) => review.accueillant_id === id);

  // Triage par date
  hostReviews.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  /* if (hostReviews.lenght > 50) {
    hostReviews.splice(0, 50);
  } */
  return hostReviews;
};

// Fonction permettant de retourner une date au format DD/MM/YYYY
export const getFormatedDate = (rawDate) => Moment(rawDate).format('DD/MM/YYYY');
