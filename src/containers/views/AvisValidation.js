import { connect } from 'react-redux';

// Import Component
import AvisValidation from '@components/views/AvisValidation';

// Data / State
const mapStateToProps = (state) => ({
  marker: state.map.markerSelected,
});

const mapDispatchToProps = () => ({});


// AvisValidation
const AvisValidationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AvisValidation);

// Export
export default AvisValidationContainer;
