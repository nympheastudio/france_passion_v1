import { connect } from 'react-redux';

// Import Component
import HostCard from '@components/partials/HostCard';

// Import actions
import { setMarkerSelected } from '@actions/map';
import { saveUserFavorite, deleteUserFavorite } from '@actions/auth';

// Data / State
const mapStateToProps = (state) => ({
  userLocation: state.map.userLocation,
  user: state.auth.user,
  reviews: state.review.publicReviews,
});

const mapDispatchToProps = (dispatch) => ({
  setMarkerSelected: (marker) => {
    dispatch(setMarkerSelected(marker));
  },
  saveUserFavorite: (favoriteId) => {
    dispatch(saveUserFavorite(favoriteId));
  },
  deleteUserFavorite: (favoriteId) => {
    dispatch(deleteUserFavorite(favoriteId));
  },
});

// HostCard
const HostCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HostCard);

// Export
export default HostCardContainer;
