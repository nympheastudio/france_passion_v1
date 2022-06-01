// == Import npm
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider } from 'react-native-paper';

// == Import styles
import { legendes } from '@styles/Themes';

// == Import components
import TextCustom from '@components/partials/TextCustom';

// == Import icon
import arrowIcon from '@styles/images/icon-arrow_left-white/icon-arrow_left-white.png';

// == Composant
const TopContent = () => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity style={legendes.backBtnContainer} onPress={() => navigation.goBack()}>
        <Image style={legendes.backBtnImage} source={arrowIcon} />
        <TextCustom fontType="bold" style={legendes.backBtnText}>
          {global.i18n.t('BT_CONTACT_RETOUR')}
        </TextCustom>
      </TouchableOpacity>
      <Divider style={legendes.divider} />
    </>
  );
};

// == Export
export default TopContent;
