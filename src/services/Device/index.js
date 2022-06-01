// Import
// import { Notifications } from 'expo';
import Constants from 'expo-constants';
import * as Localization from 'expo-localization';
// Deprecated
// import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';
import getInstallationIdAsync from 'expo/build/environment/getInstallationIdAsync';

// Fonction retournant la langue du device
const getDeviceLanguage = () => {
  const language = Localization.locale;
  // Formatte l'indicatif de la langue de "fr-fr" ou "en-us" en "fr" ou "en" si nécessaire
  if (language.indexOf('-') > 0) {
    return language.substring(0, language.indexOf('-'));
  }
  return language;
};

// Fonction retournant le status de la demande de permission de notification du device
const getExpoPushTokenPermission = async () => {
	
	//return false;//nico: bloqué pr compilation
	
  // Récupère le status de permission
  // Deprecated
  // let { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

  let { status } = await Notifications.getPermissionsAsync();

  // Si pas de permission
  if (status !== 'granted') {
    // Demande de permission à l'utilisateur et mis à jour du status
    // Deprecated
    // const { status: newStatus } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    const { status: newStatus } = await Notifications.requestPermissionsAsync();
    status = newStatus;
  }
  // Retourne le status
  return status;
};

// Fonction retournant le Expo Push Token
const getExpoPushToken = async () => {
	
	//return false;//nico: bloqué pr compilation
	
  // Récupère le status pour les notification push du device
  const status = await getExpoPushTokenPermission();

  // Si les permissions sont présentes on retourne le expo push token
  if (status === 'granted') {
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    return token;
  }

  // Si pas de permission, on retourne false
  return false;
};


// Fonction retournant les données relatives au device
// le deviceId, le deviceName, le expoPushToken, le language de l'app
const getDeviceInfo = async () => {
  // const { installationId, deviceName } = Constants;
  const { deviceName } = Constants;
  const installationId = await getInstallationIdAsync();
  const language = getDeviceLanguage();
  let expoPushToken;

  try {
    expoPushToken = await getExpoPushToken();
  } catch (error) {
    console.log(error);
  }
  
  //console.log(installationId);
  //console.log(deviceName);
  //console.log(expoPushToken);
  //console.log(language);

  return {
    deviceId: installationId || null,
    deviceName: deviceName || null,
    expoPushToken: expoPushToken || null,
    language: language || 'fr',
  };
};


export default getDeviceInfo;
