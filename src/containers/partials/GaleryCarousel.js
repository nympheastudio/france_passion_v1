import { connect } from 'react-redux';

// Import Component
import GaleryCarousel from '@components/partials/GaleryCarousel';
import { closeCarousel } from '@actions/host';

// Import actions

// Data / State
const mapStateToProps = (state) => ({
  marker: state.map.markerSelected,
  index: state.host.carousel.activeIndex,
});

const mapDispatchToProps = (dispatch) => ({
  closeCarousel: () => {
    dispatch(closeCarousel());
  },
});

// GaleryCarousel
const GaleryCarouselContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GaleryCarousel);

// Export
export default GaleryCarouselContainer;
