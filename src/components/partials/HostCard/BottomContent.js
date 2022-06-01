// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// Import routes
import { PAGE_FICHE } from '@components/navigations/routes';

// Import components
import TextCustom from '@components/partials/TextCustom';

// == Import Icons
import vigneronIcon from '@styles/images/icon-vigneron-gris/icon-vigneron-gris.png';
import fermierIcon from '@styles/images/icon-fermier-gris/icon-fermier-gris.png';
import autresIcon from '@styles/images/icon-autres-gris/icon-autres-gris.png';
import forbiddenIcon from '@styles/images/icon-forbidden-gris/icon-forbidden-gris.png';
import arrowRight from '@styles/images/icon-arrow_right-bleu/icon-arrow_right-bleu.png';

// == Import Style
import { liste } from '@styles/Themes';
import { TouchableOpacity } from 'react-native-gesture-handler';

// == Composant
const BottomContent = ({ marker, basicCard }) => {
  const navigation = useNavigation();
  const handleMorePress = () => {
    navigation.navigate(PAGE_FICHE);
  };

  return (
    <View style={liste.cardBottomContainer}>
      <TextCustom fontType="bold" style={liste.cardAddressText}>
        {marker.ville} ({marker.code_postal})
      </TextCustom>

      <View style={liste.cardExploitationContainer}>
        {marker.vigneron && (
          <Image style={liste.cardExploitationImage} source={vigneronIcon} />
        )}
        {marker.fermier && (
          <Image style={liste.cardExploitationImage} source={fermierIcon} />
        )}
        {marker.autres && !marker.vigneron && !marker.fermier && (
          <Image style={liste.cardExploitationImage} source={autresIcon} />
        )}
        <TextCustom fontType="medium" style={liste.cardExploitationText}>
          {marker.nom_propriete !== null ? marker.nom_propriete : marker.nom}
        </TextCustom>
      </View>

      <TextCustom numberOfLines={2}>
        {marker.produits_apercu && (
          <TextCustom style={liste.cardDescriptionText}>
            {marker.produits_apercu}
          </TextCustom>
        )}
        {marker.exploitation && (
          <TextCustom style={liste.cardDescriptionText}>
            {` ${marker.exploitation}`}
          </TextCustom>
        )}
      </TextCustom>

      {((marker.date_accueil && global.i18n.locale === 'fr')
      || (marker.date_accueil_en && global.i18n.locale !== 'fr'))
      && (
        <>
          <Divider style={liste.cardDivider} />
          <View style={liste.cardAccueilContainer}>
            <Image source={forbiddenIcon} />
            <TextCustom style={liste.cardAccueilText} numberOfLines={2}>
              {global.i18n.locale === 'fr'
                ? marker.date_accueil
                : marker.date_accueil_en}
            </TextCustom>
          </View>
        </>
      )}

      {/* Condition affichant le plus d'info si Card étant un callout */}
      {!basicCard && (
        <>
          <Divider style={liste.cardDivider} />
          <View style={liste.moreContainer}>
            <TouchableOpacity style={liste.moreButton} onPress={handleMorePress}>
              <TextCustom style={liste.moreText}>{global.i18n.t('BT_PAGE_ETAPE_PLUS_D_INFO')}</TextCustom>
              <Image style={liste.moreIcon} source={arrowRight} />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

// == Validation
BottomContent.propTypes = {
  marker: PropTypes.object.isRequired,
  basicCard: PropTypes.bool,
};

BottomContent.defaultProps = {
  basicCard: false,
};

// == Export
export default React.memo(BottomContent);
