/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';


// Fonction stockant les données relatives à l'authentification dans l'AsyncStorage du device
// token, user, date d'expiration du token
export const storeAuthData = async (token, user, expirationDate) => {
  await AsyncStorage.multiSet([
    ['token', token],
    ['user', JSON.stringify(user)],
    ['token-expiration-date', JSON.stringify(expirationDate)],
  ]);
};

// Fonction retournant les données stockées relatives à l'authentification depuis l'AsyncStorage
// token, user, date 'expiration du token
export const getAuthDataStored = async () => {
  const rawData = await AsyncStorage.multiGet(['token', 'user', 'token-expiration-date', 'language']);
  // AsyncStorage retourne un array, on récupère manuellement les data aux index 0, 1, 2, à la clé 1
  // Pour plus de détails, décommenter la ligne suivante :
  // console.log(rawData);
  const data = {
    token: rawData[0][1],
    user: JSON.parse(rawData[1][1]),
    expirationDate: parseInt(rawData[2][1], 10),
  };
  return data;
};

// Fonction supprimant les données relatives à l'authentification dans le AsyncStorage
// token, user, date d'expiration du token
export const removeAuthDataStored = async () => {
  const authData = ['token', 'user', 'token-expiration-date'];
  AsyncStorage.multiRemove(authData);
};

// Fonction mettant à jour le champ user dans AsyncStorage
export const updateUser = async (user) => {
  await AsyncStorage.setItem('user', JSON.stringify(user));
};
