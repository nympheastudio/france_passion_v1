/* eslint-disable object-curly-newline */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Divider } from 'react-native-paper';

// == Import styles
import { review as reviewStyle } from '@styles/Themes/fiche/routes/review';

// == Import components
import TextCustom from '@components/partials/TextCustom';
import Stars from '@components/partials/Stars';

// == Import icons
import userIcon from '@styles/images/icon-user-blanc/icon-user-blanc.png';
import messageIcon from '@styles/images/icon-message_rounded_alt-sm-rose/icon-message_rounded_alt-sm-rose.png';
import vanIcon from '@styles/images/icon-van-rose/icon-van-rose.png';

// == Import service
import { getFormatedDate } from '@services/Fiche';

// == Composant
const CustomerReview = ({ review }) => (
  <>
    <Divider style={reviewStyle.customerDivider} />
    <View style={reviewStyle.customerTopMainContainer}>
      <View style={reviewStyle.customerTopUserIconContainer}>
        <Image source={userIcon} style={reviewStyle.customerTopUserIcon} />
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
          <TextCustom fontType="medium" style={reviewStyle.customerTopNameText}>
            {`${review.prenom} ${review.nom.slice(0, 1)}.  `}
          </TextCustom>
          <TextCustom style={reviewStyle.customerTopDateText}>
            {`${global.i18n.t('TEXTE_FICHE_AVIS_PREFIXE_DATE')} ${getFormatedDate(review.date)}`}
          </TextCustom>
        </View>
        <View style={reviewStyle.customerTopScoreContainer}>
          <View style={reviewStyle.customerTopSubContainer}>
            <Image source={messageIcon} style={reviewStyle.customerTopSubIcon} />
            <Stars score={review.note_accueil} size={13} />
          </View>
          <View style={reviewStyle.customerTopSubContainer}>
            <Image source={vanIcon} style={reviewStyle.customerTopSubIcon} />
            <Stars score={review.note_aire} size={13} />
          </View>
        </View>
      </View>
    </View>
    <View style={reviewStyle.customerBotContainer}>
      <TextCustom fontType="regular" style={reviewStyle.customerBotMessageText}>
        {review.message}
      </TextCustom>
    </View>
  </>
);

// == Validation
CustomerReview.propTypes = {
  review: PropTypes.object.isRequired,
};

// == Export
export default CustomerReview;
