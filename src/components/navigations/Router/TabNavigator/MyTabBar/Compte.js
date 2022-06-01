// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';

// Import routes
import { PAGE_COMPTE } from '@components/navigations/routes';

// Import components
import TextCustom from '@components/partials/TextCustom';

// == Import Styles
import { tabNavigator } from '@styles/Themes';

// == Import icons
import activeIcon from '@styles/images/icon-user-bleu/icon-user-bleu.png';
import inactiveIcon from '@styles/images/icon-user-noir/icon-user-noir.png';

// == Import services
import { shouldCompteBeActive } from '@services/Router';

// == Composant
const Compte = ({ navigation, state }) => {
  const shoudlBeActive = shouldCompteBeActive(state);

  return (
    <TouchableOpacity style={tabNavigator.tab} onPress={() => navigation.navigate(PAGE_COMPTE)}>
      <Image
        source={shoudlBeActive ? activeIcon : inactiveIcon}
        style={{ ...tabNavigator.tabIcon, ...tabNavigator.tabIconCompte }}
      />
      <TextCustom fontType="medium" style={shoudlBeActive ? tabNavigator.activeText : tabNavigator.inactiveText}>
        {global.i18n.t('BT_NAV_COMPTE')}
      </TextCustom>
    </TouchableOpacity>
  );
};

// == Validation
Compte.propTypes = {
  navigation: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
};

// == Export
export default Compte;
