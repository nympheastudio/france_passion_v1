// == Import npm
import React, { useState } from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// == Import Components
import TextCustom from '@components/partials/TextCustom';
import ViewPager from '@components/partials/ViewPager';

// == Import routes
import { PAGE_CONNEXION } from '@components/navigations/routes';

// == Import style
import { preHome } from '@styles/Themes';

// == Import items
import fond from '@styles/images/login/login.jpg';
import logoFP from '@styles/images/logo-fp/logo-fp.png';
import { titreBlack } from '@styles/Themes/interfaces/titres';
import { base } from '@styles/Themes/interfaces/button';

// Import Component
import LanguageModal from '@containers/partials/LanguageModal';

const flagImgs = {
  'fr': require('@styles/images/drapeau-fr/drapeau-fr.png'),
  'en': require('@styles/images/drapeau-en/drapeau-en.png'),
  'de': require('@styles/images/drapeau-de/drapeau-de.png')
}

// == Composant
const PreHome = () => {
  const [isVisible, setVisibility] = useState(false);
  const [selectedLanguage, setLanguage] = useState('fr');

  const navigation = useNavigation();
  const navigateToConnexion = () => navigation.navigate(PAGE_CONNEXION);

  const handleLanguePress = () => {
    setVisibility(!isVisible);
  };

  return (
    <>
      <ImageBackground
        source={fond}
        style={preHome.backgroundStyle}
        // Not found this
        // imageStyle={preHome.backgroundImageSytle}
      >

        <TouchableOpacity style={preHome.btnSelectLanguage} onPress={handleLanguePress}>
          <Image source={flagImgs[global.i18n.locale || selectedLanguage]} />
          <Text style={{ color: '#fff' }}>{global.i18n.locale || selectedLanguage}</Text>
        </TouchableOpacity>

        <View style={preHome.topView}>
          <Image source={logoFP} />
        </View>

        <View style={preHome.bottomView}>
          <TextCustom fontType="medium" numberOfLines={2} style={{ ...preHome.title, ...titreBlack }}>
            {global.i18n.t('TITRE_PAGE_ACCUEIL')}
          </TextCustom>

          <ViewPager />

          <TouchableOpacity style={preHome.connexion} onPress={navigateToConnexion}>
            <TextCustom style={{ ...base, ...preHome.buttonText }}>{global.i18n.t('BT_PAGE_ACCUEIL_CONNEXION')}</TextCustom>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <LanguageModal isVisible={isVisible} setVisibility={setVisibility} />
    </>
  );
};

// == Export
export default PreHome;
