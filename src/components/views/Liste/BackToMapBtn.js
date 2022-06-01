// == Import npm
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// Import components
import TextCustom from '@components/partials/TextCustom';

// == Import style
import { liste } from '@styles/Themes';

// == Import icons
import mapAlt from '@styles/images/icon-map_alt-blanc/icon-map_alt-blanc.png';

// == Composant
const BackToMapBtn = () => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity style={liste.backBtnContainer} onPress={() => navigation.goBack()}>
        <Image source={mapAlt} style={liste.backBtnImage} />
        <TextCustom fontType="bold" style={liste.backBtnText}>
          {global.i18n.t('BT_LISTE_RETOUR_CARTE')}
        </TextCustom>
      </TouchableOpacity>
      <Divider style={liste.listDivider} />
    </>
  );
};

// == Export
export default BackToMapBtn;
