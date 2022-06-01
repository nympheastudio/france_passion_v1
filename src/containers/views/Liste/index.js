import { connect } from 'react-redux';

// Import Component
import Liste from '@components/views/Liste';

// Import actions

// Data / State
const mapStateToProps = (state) => ({
  userLocation: state.map.userLocation,
  currentMarkers: state.map.currentMarkers,
});

const mapDispatchToProps = () => ({});

// Liste
const ListeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Liste);

// Export
export default ListeContainer;
