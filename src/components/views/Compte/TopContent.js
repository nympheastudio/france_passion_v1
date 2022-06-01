// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Divider } from 'react-native-paper';

// == Import styles
import { compte } from '@styles/Themes';
import { titre3 } from '@styles/Themes/interfaces/titres';
import { text } from '@styles/Themes/interfaces/text';

// == Import components
import TextCustom from '@components/partials/TextCustom';

// == Import icons
import userIcon from '@styles/images/icon-user-blanc/icon-user-blanc.png';

// == Composant
const TopContent = ({ user }) => (
  <View style={compte.compteTopContainer}>
    <TextCustom fontType="bold" style={[text, titre3]}>{global.i18n.t('TITRE_COMPTE')}</TextCustom>
    <View style={compte.compteTopUserContainer}>
      <View style={compte.compteTopUserIconContainer}>
        <Image source={userIcon} style={compte.compteTopUserIcon} />
      </View>
      <View style={compte.compteTopUserTextInfo}>
        {(user.prenom || user.nom) && (
          <TextCustom numberOfLine={1} fontType="medium" style={compte.compteTopUserName}>
            {`${user.prenom ?? user.prenom} ${user.nom ?? user.nom}`}
          </TextCustom>
        )}
        <TextCustom numberOfLine={2} fontType="regular" style={compte.compteTopUserEmail}>
          {user.email}
        </TextCustom>
      </View>
    </View>
    <Divider style={compte.compteTopDivider} />
    <View>
      <TextCustom>
        <TextCustom style={compte.compteTopSubText}>{global.i18n.t('TEXTE_COMPTE_NUMERO_ADHERENT')} : </TextCustom>
        <TextCustom fontType="medium" style={compte.compteTopSubText}>
          {user.numero_carte_adherent}
        </TextCustom>
      </TextCustom>
      <TextCustom>
        <TextCustom style={compte.compteTopSubText}>{global.i18n.t('TEXTE_COMPTE_DATE_VALIDITE')} : </TextCustom>
        <TextCustom fontType="medium" style={compte.compteTopSubText}>
          {user.date_expiration_carte_adherent}{user.validite}
        </TextCustom>
      </TextCustom>
    </View>
  </View>
);

// == Validation
TopContent.propTypes = {
  user: PropTypes.object.isRequired,
};

// == Export
export default TopContent;
