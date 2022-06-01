import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Moment from 'moment';

// Fonction stockant les avis (user et public) dans un fichier FileSystem
// et générant et stockant dans l'AsyncStorage la date d'expiration de ce fichier
export const storeReviewsData = async (reviews) => {
  // Création et stockage de la date d'expiration à 1 semaine ultérieure
  const reviewExpirationDate = Moment(new Date()).add(1, 'w').format('YYYY-MM-DD');
  AsyncStorage.setItem('review-expiration-date', reviewExpirationDate);

  // Conversion des avis de JSON à String
  const userReviews = JSON.stringify(reviews.avis_adherent);
  const publicReviews = JSON.stringify(reviews.avis_public);

  // Stockage des avis dans 2 fichiers différents
  await FileSystem.writeAsStringAsync(
    `${FileSystem.documentDirectory}user_reviews.json`,
    userReviews,
    { encoding: FileSystem.EncodingType.UTF8 },
  );
  await FileSystem.writeAsStringAsync(
    `${FileSystem.documentDirectory}public_reviews.json`,
    publicReviews,
    { encoding: FileSystem.EncodingType.UTF8 },
  );
};

// Fonction retournant depuis FileSystem un object comprenant les avis user et public
export const getReviewsDataStored = async () => {
  try {
    const userReviews = await FileSystem.readAsStringAsync(
      `${FileSystem.documentDirectory}user_reviews.json`,
      { encoding: FileSystem.EncodingType.UTF8 },
    );
    const publicReviews = await FileSystem.readAsStringAsync(
      `${FileSystem.documentDirectory}public_reviews.json`,
      { encoding: FileSystem.EncodingType.UTF8 },
    );

    const allReviews = {
      avis_adherent: JSON.parse(userReviews),
      avis_public: JSON.parse(publicReviews),
    };
    if (!allReviews.publicReviews || allReviews.publicReviews.length === 0) {
      return null;
    }

    return allReviews;
  } catch (error) {
    return null;
  }
};

// Fonction supprimant les fichiers avis user et public du FileSystem
export const removeReviewsDataStored = async () => {
  FileSystem.deleteAsync(
    `${FileSystem.documentDirectory}user_reviews.json`,
    { idempotent: true },
  );
  FileSystem.deleteAsync(
    `${FileSystem.documentDirectory}public_reviews.json`,
    { idempotent: true },
  );
};

// Fonction retournant la date d'expiration des avis depuis l'AsyncStorage
const getReviewsExpirationDateStored = async () => {
  const date = await AsyncStorage.getItem('review-expiration-date');
  return date;
};

// Fonction retournant un booléen après comparaison de la date d'expiration et date courrante
// true si expiré
// false si non expiré
export const checkReviewExpiration = async () => {
  const expirationDate = await getReviewsExpirationDateStored();
  const date = Moment(new Date()).format('YYYY-MM-DD');
  return Moment(date).isAfter(expirationDate);
};
