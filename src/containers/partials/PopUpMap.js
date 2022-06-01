import { connect } from 'react-redux';

// Import Component
import PopUpMap from '@components/partials/PopUpMap';

// Import actions

// Data / State
const mapStateToProps = (state) => ({
  marker: state.map.markerSelected,
  location: state.map.userLocation,
});

const mapDispatchToProps = () => ({});

// PopUpMap
const PopUpMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopUpMap);

// Export
export default PopUpMapContainer;
