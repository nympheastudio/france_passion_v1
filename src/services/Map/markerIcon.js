import { Platform } from 'react-native';

import iconMap from '@styles/images/icon-map-fp/icon-map-fp.png';
import iconMapiOS from '@styles/images/icon-map-fp-ios/icon-map-fp.png';
import iconMapActive from '@styles/images/icon-map-fp-active/icon-map-fp-active.png';
import iconMapActiveiOS from '@styles/images/icon-map-fp-active-ios/icon-map-fp-active.png';

// Fonction retournant les icônes actives et inactives d'un marker selon son OS
// Différentes prises en charge des résolutions en iOS et Android
const getMarkerIcon = () => {
  const os = Platform.OS;
  let inactiveMarker = '';
  let activeMarker = '';
  if (os === 'ios') {
    inactiveMarker = iconMapiOS;
    activeMarker = iconMapActiveiOS;
  } else {
    inactiveMarker = iconMap;
    activeMarker = iconMapActive;
  }
  return { inactiveMarker, activeMarker };
};

export default getMarkerIcon;
