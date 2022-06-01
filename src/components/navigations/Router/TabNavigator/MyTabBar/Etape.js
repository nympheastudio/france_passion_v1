// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';

// Import routes
import { PAGE_ETAPE } from '@components/navigations/routes';

// Import components
import TextCustom from '@components/partials/TextCustom';

// == Import Styles
import { tabNavigator } from '@styles/Themes';

// == Import icons
import activeIcon from '@styles/images/icon-map-bleu/icon-map-bleu.png';
import inactiveIcon from '@styles/images/icon-map-noir/icon-map-noir.png';

// == Import services
import { shouldEtapeBeActive } from '@services/Router';

// == Composant
const Etape = ({ navigation, state }) => {
  const shouldBeActive = shouldEtapeBeActive(state);

  return (
    <TouchableOpacity style={tabNavigator.tab} onPress={() => navigation.navigate(PAGE_ETAPE)}>
      <Image
        source={shouldBeActive ? activeIcon : inactiveIcon}
        style={{ ...tabNavigator.tabIcon, ...tabNavigator.tabIconEtapes }}
      />
      <TextCustom fontType="medium" style={shouldBeActive ? tabNavigator.activeText : tabNavigator.inactiveText}>
        {global.i18n.t('BT_NAV_ETAPE')}
      </TextCustom>
    </TouchableOpacity>
  );
};

// == Validation
Etape.propTypes = {
  navigation: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
};

// == Export
export default Etape;
