import { connect } from 'react-redux';

// Import Component
import Cms from '@components/partials/Cms';

// Import actions
// == Import actions
import { generateError } from '@actions/error';

// Data / State
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  generateError: (errorCode, errorMessage) => {
    dispatch(generateError(errorCode, errorMessage));
  },
});

// Cms
const CmsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cms);

// Export
export default CmsContainer;
