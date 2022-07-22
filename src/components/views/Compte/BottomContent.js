// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// == Import routes
import { PAGE_AVIS } from '@components/navigations/routes';

// == Import styles
import { compte } from '@styles/Themes';

// == Import icons
import starIcon from '@styles/images/icon-star_outline-noir/icon-star_outline-noir.png';
import messageIcon from '@styles/images/icon-message_rounded_alt-noir/icon-message_rounded_alt-noir.png';
import powerIcon from '@styles/images/icon-power_off-rose/icon-power_off-rose.png';

// == Import components
import TextCustom from '@components/partials/TextCustom';
import LanguageModal from '@containers/partials/LanguageModal';

// == Composant
const BottomContent = ({ reviews, logout , user }) => {
  const navigation = useNavigation();
  const [isVisible, setVisibility] = useState(false);

  const handleMyReviewPress = () => {
    navigation.navigate(PAGE_AVIS);
  };
  const handleLanguePress = () => {
    setVisibility(!isVisible);
  };
  const handleLogoutPress = () => {
    logout();
  };

  return (
    <View style={compte.compteBotMainContainer}>
      <TouchableOpacity onPress={handleMyReviewPress} style={compte.compteBotSecondayBtn}>
        <View style={compte.compteBotContainer}>
          <Image source={starIcon} style={compte.compteBotImage} />
          <TextCustom numberOfLines={2} fontType="medium" style={compte.compteBotText}>
            {global.i18n.t('BT_COMPTE_NOMBRE_AVIS_DEPOSES')} : {reviews.length}
          </TextCustom>
        </View>
        <TextCustom style={compte.compteBotSecondayBtnText}>
          {global.i18n.t('BT_COMPTE_VOIR_AVIS')}
        </TextCustom>
      </TouchableOpacity>
      <Divider style={compte.compteBotDivider} />
      <View style={compte.compteBotContainer}>
        <Image source={messageIcon} style={compte.compteBotImage} />
        <TouchableOpacity onPress={handleLanguePress}>
          <TextCustom fontType="medium" style={compte.compteBotText}>
            {global.i18n.t('BT_COMPTE_CHANGER_LANGUE')}
          </TextCustom>
        </TouchableOpacity>
      </View>
     
    
      <Divider style={compte.compteBotDivider} />
      <View style={compte.compteBotContainer}>
        <Image source={powerIcon} style={compte.compteBotImage} />
        <TouchableOpacity onPress={handleLogoutPress}>
          <TextCustom fontType="medium" style={compte.compteBotLogoutBtnText}>
            {global.i18n.t('BT_COMPTE_DECONNEXION')}
          </TextCustom>
        </TouchableOpacity>
      </View>
      <LanguageModal isVisible={isVisible} setVisibility={setVisibility} />
    </View>
  );
};

// == Validation
BottomContent.propTypes = {
  reviews: PropTypes.array,
  logout: PropTypes.func.isRequired,
};

BottomContent.defaultProps = {
  reviews: [],
};

// == Export
export default BottomContent;
