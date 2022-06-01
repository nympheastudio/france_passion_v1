// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';

// Import routes
import { PAGE_FAVORIS } from '@components/navigations/routes';

// Import components
import TextCustom from '@components/partials/TextCustom';

// == Import Styles
import { tabNavigator } from '@styles/Themes';

// == Import icons
import activeIcon from '@styles/images/icon-heart-bleu/icon-heart-bleu.png';
import inactiveIcon from '@styles/images/icon-heart-noir/icon-heart-noir.png';

// == Import services
import { shouldFavorisBeActive } from '@services/Router';

// == Composant
const Favoris = ({ navigation, state }) => {
  const shouldBeActive = shouldFavorisBeActive(state);

  return (
    <TouchableOpacity style={tabNavigator.tab} onPress={() => navigation.navigate(PAGE_FAVORIS)}>
      <Image
        source={shouldBeActive ? activeIcon : inactiveIcon}
        style={{ ...tabNavigator.tabIcon, ...tabNavigator.tabIconFavoris }}
      />
      <TextCustom fontType="medium" style={shouldBeActive ? tabNavigator.activeText : tabNavigator.inactiveText}>
        {global.i18n.t('BT_NAV_FAVORIS')}
      </TextCustom>
    </TouchableOpacity>
  );
};

// == Validation
Favoris.propTypes = {
  navigation: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
};

// == Export
export default Favoris;
