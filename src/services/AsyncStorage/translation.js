/* eslint-disable no-console */
import * as FileSystem from 'expo-file-system';

// Fonction stockant les données de traduction dans le FileSystem
export const storeTranslationsData = async (translations) => {
  await FileSystem.writeAsStringAsync(
    `${FileSystem.documentDirectory}translations.json`,
    JSON.stringify(translations),
    { encoding: FileSystem.EncodingType.UTF8 },
  );
};

// Fonction retournant les traduction depuis le FileSystem
// retourne null si n'existe pas
export const getTranslationsDataStored = async () => {
  try {
    const translations = await FileSystem.readAsStringAsync(
      `${FileSystem.documentDirectory}translations.json`,
      { encoding: FileSystem.EncodingType.UTF8 },
    );

    const parsedTranslations = JSON.parse(translations);
    if (!parsedTranslations || parsedTranslations.length === 0) {
      return null;
    }

    return parsedTranslations;
  } catch (error) {
    return null;
  }
};

// Fonction supprimant les données de traductions du FileSystem
export const removeTranslationsDataStored = async () => {
  FileSystem.deleteAsync(
    `${FileSystem.documentDirectory}translations.json`,
    { idempotent: true },
  );
};
