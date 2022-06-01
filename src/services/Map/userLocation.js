import * as Location from 'expo-location';

// Fonction retournant un booléen en fonction de la réponse utilisateur
// sur la demande de permission des données de géoloc
const getLocationPermission = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status === 'granted') {
    return true;
  }
  return false;
};

// Fonction retournant la syntaxe formattée des coordonnées GPS d'un marker
const formatLocation = (location) => {
  const userLocation = {
    latitude: location.coords ? location.coords.latitude : null,
    longitude: location.coords ? location.coords.longitude : null,
  };
  return userLocation;
};

// Fonction permettant de définir la localisation de l'utilisateur en temps réel
// et de la stocker dans le state.
const watchUserLocation = async (saveUserLocation) => {
  let locationUpdater = null;

  locationUpdater = await Location.watchPositionAsync({
    accuracy: 6,
    timeInterval: 2000,
    distanceInterval: 2,
    mayShowUserSettingsDialog: true,
  }, (location) => saveUserLocation(formatLocation(location)));
  return locationUpdater;
};

// Fonction retournant les coordonnées utilisateur ainsi que le locationUpdater
const requestUserLocation = async (saveUserLocation) => {
  let userCoordinate = {};
  let locationUpdater = null;
  const locationPermissionGranted = await getLocationPermission();

  if (locationPermissionGranted) {
    try {
      const lastLocation = await Location.getLastKnownPositionAsync();
      userCoordinate = formatLocation(lastLocation);
    } catch (error) {
      const currentLocation = await Location.getCurrentPositionAsync({ accuracy: 6 });
      userCoordinate = formatLocation(currentLocation);
    }

    saveUserLocation(userCoordinate);
    locationUpdater = await watchUserLocation(saveUserLocation);
  }
  return { userCoordinate, locationUpdater };
};

export default requestUserLocation;
