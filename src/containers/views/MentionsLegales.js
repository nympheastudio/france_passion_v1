import { connect } from 'react-redux';

// Import Component
import MentionsLegales from '@components/views/MentionsLegales';


// Data / State
const mapStateToProps = (state) => ({
  token: state.auth.token,
  deviceId: state.device.deviceId,
  language: state.language.langue,
});

const mapDispatchToProps = () => ({});


// MentionsLegales
const MentionsLegalesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MentionsLegales);

// Export
export default MentionsLegalesContainer;
