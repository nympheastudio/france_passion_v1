// == Import npm
import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider } from 'react-native-paper';

// Import components
import TextCustom from '@components/partials/TextCustom';
import { TouchableOpacity } from 'react-native-gesture-handler';

// == Import icon
import arrowIcon from '@styles/images/icon-arrow_left-white/icon-arrow_left-white.png';

// Import Style
import { liste, contact } from '@styles/Themes';
import { titre3, titre4 } from '@styles/Themes/interfaces/titres';
import { text } from '@styles/Themes/interfaces/text';

// == Composant
const TopContent = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={liste.backBtnContainer} onPress={() => navigation.goBack()}>
        <Image style={contact.backBtnImage} source={arrowIcon} />
        <TextCustom fontType="bold" style={liste.backBtnText}>
          {global.i18n.t('BT_CONTACT_RETOUR')}
        </TextCustom>
      </TouchableOpacity>
      <Divider style={liste.listDivider} />
      <TextCustom fontType="bold" style={[text, titre3, contact.contactTitle]}>{global.i18n.t('TITRE_CONTACT')}</TextCustom>
      <TextCustom fontType="bold" style={[text, titre4]}>FRANCE PASSION</TextCustom>
      <View>
        <TextCustom style={[text]}>info@france-passion.com</TextCustom>
        <TextCustom style={[text]}>CS 10057 F-84 202</TextCustom>
        <TextCustom style={[text]}>Carpentras cedex</TextCustom>
      </View>
    </View>
  );
};

// == Export
export default TopContent;
