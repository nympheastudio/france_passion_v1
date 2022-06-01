import { connect } from 'react-redux';

// Import Component
import Galery from '@components/views/Fiche/MyTabView/Routes/Galery';

// Import actions
import { openCarousel } from '@actions/host';

// Data / State
const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  openCarousel: (index) => {
    dispatch(openCarousel(index));
  },
});

// Galery
const GaleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Galery);

// Export
export default GaleryContainer;
