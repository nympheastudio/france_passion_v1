// == Import npm
import React from 'react';
import { View } from 'react-native';

// Import components
import TextCustom from '@components/partials/TextCustom';

// == Import style
import { liste } from '@styles/Themes';
import { titre3 } from '@styles/Themes/interfaces/titres';
import { text } from '@styles/Themes/interfaces/text';


// == Composant
const Title = () => (
  <View fontType="bold" style={liste.titlePage}>
    <TextCustom fontType="bold" style={[text, titre3]}>
      {global.i18n.t('TITRE_FAVORIS')}
    </TextCustom>
  </View>
);

// == Export
export default Title;
