import { connect } from 'react-redux';

// Import Component
import Confidentialite from '@components/views/Confidentialite';


// Data / State
const mapStateToProps = (state) => ({
  token: state.auth.token,
  deviceId: state.device.deviceId,
  language: state.language.langue,
});

const mapDispatchToProps = () => ({});


// Confidentialite
const ConfidentialiteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Confidentialite);

// Export
export default ConfidentialiteContainer;
