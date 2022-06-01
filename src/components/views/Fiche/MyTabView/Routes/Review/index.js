// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


// == Import services
import { getHostReviews } from '@services/Fiche';

// Import styles
import { review } from '@styles/Themes/fiche/routes/review';

// == Import components
import TextCustom from '@components/partials/TextCustom';
import CustomerReview from './CustomerReview';
import OverallReview from './OverallReview';
import NoReview from './NoReview';
import WriteReview from './WriteReview';

// == Composant
const Review = ({ reviews, userReviews, marker }) => {
  const [currentReviews, setCurrentReviews] = useState([]);
  const [reviewPage, setReviewPage] = useState(0);
  const [loadingPage, setLoadingPage] = useState(true);

  const hostReviews = getHostReviews(reviews, marker.id);
  const reviewsPerPage = 10;
  const lastPage = Math.floor(hostReviews.length / reviewsPerPage);

  const handleClick = () => {
    setLoadingPage(true);
    setReviewPage(reviewPage + 1);
  };

  useEffect(() => {
    if (reviewPage <= lastPage) {
      const sliceStart = reviewPage * reviewsPerPage;
      const sliceStop = ((reviewPage + 1) * reviewsPerPage) - 1;
      const nextReviews = hostReviews.slice(sliceStart, sliceStop);
      setCurrentReviews([...currentReviews, ...nextReviews]);
      setLoadingPage(false);
    }
  }, [reviewPage]);

  return (
    <>
      {hostReviews.length === 0
        ? <NoReview />
        : (
          <View>
            <OverallReview hostReviews={hostReviews} />
            <WriteReview userReviews={userReviews} hostId={marker.id} />
            {currentReviews.map((currentReview) => (
              <CustomerReview key={currentReview.id} review={currentReview} />
            ))}
            {reviewPage < lastPage && !loadingPage && (
              <TouchableOpacity onPress={handleClick} style={review.btnMore}>
                <TextCustom style={review.textMore}>
                  {global.i18n.t('BT_FICHE_AVIS_CHARGER_PLUS')}
                </TextCustom>
              </TouchableOpacity>
            )}
          </View>
        )}
    </>
  );
};

// == Validation
Review.propTypes = {
  reviews: PropTypes.array.isRequired,
  userReviews: PropTypes.array.isRequired,
  marker: PropTypes.object.isRequired,
};

// == Export
export default Review;
