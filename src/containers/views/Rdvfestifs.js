import { connect } from 'react-redux';

// Import Component
import Rdvfestifs from '@components/views/Rdvfestifs';
import { setMarkerSelected } from '@actions/map';

// Data / State
const mapStateToProps = (state) => ({
  token: state.auth.token,
  deviceId: state.device.deviceId,
  language: state.language.langue,
  hosts: state.host.hosts,
});

const mapDispatchToProps = (dispatch) => ({
  setMarkerSelected: (marker) => {
    dispatch(setMarkerSelected(marker));
  },

});


// Rdvfestifs
const RdvfestifsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Rdvfestifs);

// Export
export default RdvfestifsContainer;

