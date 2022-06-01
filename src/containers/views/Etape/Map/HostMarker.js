import { connect } from 'react-redux';

// Import Component
import HostMarker from '@components/views/Etape/Map/HostMarker';

// Import actions
import { setMarkerSelected } from '@actions/map';

// Data / State
const mapStateToProps = (state) => ({
  markerSelected: state.map.markerSelected,
});

const mapDispatchToProps = (dispatch) => ({
  setMarkerSelected: (marker) => {
    dispatch(setMarkerSelected(marker));
  },
});

// Map
const HostMarkerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HostMarker);

// Export
export default HostMarkerContainer;
