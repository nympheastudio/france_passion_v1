/* eslint-disable object-curly-newline */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

// == Import styles
import { review } from '@styles/Themes/fiche/routes/review';

// == Import icons
import outlinedStar from '@styles/images/icon-star_outline-rose/icon-star_outline-rose.png';
import messageIcon from '@styles/images/icon-message_rounded_alt-sm-rose/icon-message_rounded_alt-sm-rose.png';
import vanIcon from '@styles/images/icon-van-rose-lg/icon-van-rose-lg.png';

// == Import components
import TextCustom from '@components/partials/TextCustom';
import Stars from '@components/partials/Stars';

// == Import services
import { getHostReviewInfo } from '@services/Fiche';

// == Composant
const OverallReview = ({ hostReviews }) => {
  const {
    globalScore,
    accueilScore,
    aireScore,
    reviewNumber,
  } = getHostReviewInfo(hostReviews);

  
      //  <View style={review.overallMainContainer}>
    //    <Image source={outlinedStar} style={review.overallScoreIcon} />
    //    <TextCustom numberOfLines={1}>
    //      <TextCustom style={review.overallScoreText}>{globalScore.toFixed(1)} </TextCustom>
    //      <TextCustom style={review.overallScoreEvalText}>
    //        {`(${reviewNumber} ${global.i18n.t('TEXTE_FICHE_AVIS_EVALUATIONS')}${reviewNumber > 1 ? 's' : ''})`}
    //      </TextCustom>
    //    </TextCustom>
	//</View>
  
  return (
    <View>

      <View style={review.overallSubContainer}>
        <View style={review.overallSubTitleContainer}>
          <Image source={messageIcon} style={review.overallSubImage} />
          <TextCustom numberOfLines={1} fontType="medium" style={review.overallSubText}>
            {global.i18n.t('TEXTE_FICHE_AVIS_ACCUEIL')}
          </TextCustom>
        </View>
        <Stars score={accueilScore} />
      </View>
      <View style={review.overallSubContainer}>
        <View style={review.overallSubTitleContainer}>
          <Image source={vanIcon} style={review.overallSubImage} />
          <TextCustom numberOfLines={1} fontType="medium" style={review.overallSubText}>
            {global.i18n.t('TEXTE_FICHE_AVIS_STATIONNEMENT')}
          </TextCustom>
        </View>
        <Stars score={aireScore} />
      </View>
    </View>
  );
};

// == Validation
OverallReview.propTypes = {
  hostReviews: PropTypes.array.isRequired,
};

// == Export
export default OverallReview;
