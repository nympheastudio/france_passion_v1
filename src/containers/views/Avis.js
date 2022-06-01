import { connect } from 'react-redux';

// Import Component
import Avis from '@components/views/Avis';

import { setMarkerSelected } from '@actions/map';

// Data / State
const mapStateToProps = (state) => ({
  reviews: state.review.userReviews,
  hosts: state.host.hosts,
});

const mapDispatchToProps = (dispatch) => ({
  setMarkerSelected: (marker) => {
    dispatch(setMarkerSelected(marker));
  },

});

// Avis
const AvisContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Avis);



// Export
export default AvisContainer;
