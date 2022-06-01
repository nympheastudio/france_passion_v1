import { connect } from 'react-redux';

// Import Component
import AvisDeposer from '@components/views/AvisDeposer';

// Import actions
import { generateError } from '@actions/error';

// Data / State
const mapStateToProps = (state) => ({
  token: state.auth.token,
  deviceId: state.device.deviceId,
  marker: state.map.markerSelected,
});

const mapDispatchToProps = (dispatch) => ({
  generateError: (errorCode, errorMessage) => {
    dispatch(generateError(errorCode, errorMessage));
  },
});

// AvisDeposer
const AvisDeposerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AvisDeposer);

// Export
export default AvisDeposerContainer;
