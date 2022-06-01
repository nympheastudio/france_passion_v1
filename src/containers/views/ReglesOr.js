import { connect } from 'react-redux';

// Import Component
import ReglesOr from '@components/views/ReglesOr';


// Data / State
const mapStateToProps = (state) => ({
  token: state.auth.token,
  deviceId: state.device.deviceId,
  language: state.language.langue,
});

const mapDispatchToProps = () => ({});


// RegleOr
const ReglesOrContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReglesOr);

// Export
export default ReglesOrContainer;
