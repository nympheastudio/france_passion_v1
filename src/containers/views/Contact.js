import { connect } from 'react-redux';

// Import Component
import Contact from '@components/views/Contact';

// == Import actions
import { generateError } from '@actions/error';


// Data / State
const mapStateToProps = (state) => ({
  token: state.auth.token,
  deviceId: state.device.deviceId,
});

const mapDispatchToProps = (dispatch) => ({
  generateError: (errorCode, errorMessage) => {
    dispatch(generateError(errorCode, errorMessage));
  },
});


// Contact
const ContactContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);

// Export
export default ContactContainer;
