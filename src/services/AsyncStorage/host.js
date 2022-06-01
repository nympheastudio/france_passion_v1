/* eslint-disable no-console */
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Moment from 'moment';

// Fonction asynchrone stockant les accueillants dans le FileSystem
// et stockant une date d'expiration accueillant dans l'AsyncStorage
export const storeHostsData = async (hosts) => {
  // Création et stockage de la date d'expiration à un mois ultérieur
  const hostExpirationDate = Moment(new Date()).add(7, 'D').format('YYYY-MM-DD');
  AsyncStorage.setItem('host-expiration-date', hostExpirationDate);

  await FileSystem.writeAsStringAsync(
    // Définition du nom du fichier dans lequel stocker les données
    `${FileSystem.documentDirectory}hosts.json`,
    // Définition des données à stocker
    JSON.stringify(hosts),
    // Paramètres supplémentaire définissant l'encodage en UTF8
    { encoding: FileSystem.EncodingType.UTF8 },
  );
};

// Fonction asynchrone retournant les accueillants depuis le FileSystem
export const getHostsDataStored = async () => {
  try {
    // Récupération des hosts en format String
    const hosts = await FileSystem.readAsStringAsync(
      `${FileSystem.documentDirectory}hosts.json`,
      { encoding: FileSystem.EncodingType.UTF8 },
    );
    // Conversion des data en JSON
    const parsedHosts = JSON.parse(hosts);

    if (!parsedHosts || parsedHosts.length === 0) {
      return null;
    }
    // Retourne les accueillants si JSON non null ou vide
    return parsedHosts;
  } catch (error) {
    return null;
  }
};

// Fonction supprimant le fichier des accueillants stocké dans les FileSystem
export const removeHostsDataStored = async () => {
  FileSystem.deleteAsync(
    `${FileSystem.documentDirectory}hosts.json`,
    { idempotent: true },
  );
};

// Fonction retournant la date d'expiration du fichier accueillant
const getHostExpirationDateStored = async () => {
  const date = await AsyncStorage.getItem('host-expiration-date');
  return date;
};

// Fonction retournant un booléen après comparaison de la date d'expiration et date courrante.
// false si ficheir non expiré
// true si fichier expiré
export const checkHostExpiration = async () => {
  const expirationDate = await getHostExpirationDateStored();
  const date = Moment(new Date()).format('YYYY-MM-DD');
  return Moment(date).isAfter(expirationDate);
  
};
