import { connect } from 'react-redux';

// Import Component
import Review from '@components/views/Fiche/MyTabView/Routes/Review';

// Data / State
const mapStateToProps = (state) => ({
  reviews: state.review.publicReviews,
  userReviews: state.review.userReviews,
  marker: state.map.markerSelected,
});

const mapDispatchToProps = () => ({});

// Review
const ReviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Review);

// Export
export default ReviewContainer;
