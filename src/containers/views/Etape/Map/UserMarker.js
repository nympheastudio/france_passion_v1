import { connect } from 'react-redux';

// Import Component
import UserMarker from '@components/views/Etape/Map/UserMarker';

// Import actions
import { saveUserLocation, setLocation } from '@actions/map';

// Data / State
const mapStateToProps = (state) => ({
  userLocation: state.map.userLocation,
});

const mapDispatchToProps = (dispatch) => ({
  saveUserLocation: (userLocation) => {
    dispatch(saveUserLocation(userLocation));
  },
  setLocation: (latitude, longitude) => {
    dispatch(setLocation(latitude, longitude));
  },
});

// Map
const UserMarkerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserMarker);

// Export
export default UserMarkerContainer;
