// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';

// Import routes
import { PAGE_PLUS } from '@components/navigations/routes';

// Import components
import TextCustom from '@components/partials/TextCustom';

// == Import Styles
import { tabNavigator } from '@styles/Themes';

// == Import icons
import activeIcon from '@styles/images/icon-bullet-bleu/icon-bullet-bleu.png';
import inactiveIcon from '@styles/images/icon-bullet-noir/icon-bullet-noir.png';

// == Composant
const Plus = ({ state, toggleSubMenu }) => {
  const isFocused = state.routeNames[state.index] === PAGE_PLUS;
  return (
    <TouchableOpacity style={tabNavigator.tab} onPress={toggleSubMenu}>
      <Image
        source={isFocused ? activeIcon : inactiveIcon}
        style={tabNavigator.tabIcon}
      />
      <TextCustom fontType="medium" style={isFocused ? tabNavigator.activeText : tabNavigator.inactiveText}>
        {global.i18n.t('BT_NAV_PLUS')}
      </TextCustom>
    </TouchableOpacity>
  );
};

// == Validation
Plus.propTypes = {
  state: PropTypes.object.isRequired,
  toggleSubMenu: PropTypes.func.isRequired,
};

// == Export
export default Plus;
